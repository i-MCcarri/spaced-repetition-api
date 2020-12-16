const bcrypt = require('bcryptjs')

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const UserService = {
  hasUserWithUserName(db, username) {
    return db('user')
      .where({ username })
      .first()
      .then(user => !!user)
  },
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('user')
      .returning('*')
      .then(([user]) => user)
  },
  validatePassword(password) {
    if (password.length < 8) {
      return 'Password be longer than 8 characters'
    }
    if (password.length > 72) {
      return 'Password be less than 72 characters'
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces'
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return 'Password must contain one upper case, lower case, number and special character'
    }
    return null
  },
  hashPassword(password) {
    return bcrypt.hash(password, 12)
  },
  serializeUser(user) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
    }
  },
  populateUserWords(db, user_id) {
    return db.transaction(async trx => {
      const [languageId] = await trx
        .into('language')
        .insert([
          { name: 'Mandarin', user_id },
        ], ['id'])

      // when inserting words,
      // we need to know the current sequence number
      // so that we can set the `next` field of the linked language
      const seq = await db
        .from('word_id_seq')
        .select('last_value')
        .first()

      const languageWords = [
        ['我', 'wǒ', 'wo', 'i', 2],
        ['你', 'nǐ', 'ni', 'you', 3],
        ['你好', 'nǐ hǎo', 'ni hao', 'hello', 4],
        ['是', 'shì', 'shi', 'is/are', 5],
        ['的', 'de', 'de', 'of', 6],
        ['狗', 'gǒu', 'gou', 'dog', 7],
        ['猫', 'māo', 'mao', 'cat', 8],
        ['惊人', 'jīngrén', 'jingren', 'amazing', 9],
        ['正在', 'zhèngzài', 'zhengzai', 'being/currently', 10],
        ['练习', 'liànxí', 'lianxi', 'practice', 11],
        ['开发人员', 'kāifā rényuán', 'kaifa renyuan', 'developer', 12],
        ['翻译', 'fānyì', 'fanyi', 'translate', null]
      ]

      const [languageHeadId] = await trx
        .into('word')
        .insert(
          languageWords.map(([character, pinyin, original, translation, nextInc]) => ({
            language_id: languageId.id,
            character,
            pinyin,
            original,
            translation,
            next: nextInc
              ? Number(seq.last_value) + nextInc
              : null
          })),
          ['id']
        )

      await trx('language')
        .where('id', languageId.id)
        .update({
          head: languageHeadId.id,
        })
    })
  },
}

module.exports = UserService
