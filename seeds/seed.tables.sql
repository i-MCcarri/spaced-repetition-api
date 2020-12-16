BEGIN;

TRUNCATE
  "word",
  "language",
  "user";

INSERT INTO "user" ("id", "username", "name", "password")
VALUES
  (
    1,
    'admin',
    'Guanli yuan',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

INSERT INTO "language" ("id", "name", "user_id")
VALUES
  (1, 'Mandarin (simplified)', 1);

INSERT INTO "word" ("id", "language_id", "character", "pinyin", "original", "translation", "next")
VALUES
  (1, 1, '我', 'wǒ', 'wo', 'i', 2),
  (2, 1, '你', 'nǐ', 'ni', 'you', 3),
  (3, 1, '你好', 'nǐ hǎo', 'ni hao', 'hello', 4),
  (4, 1, '是', 'shì', 'shi', 'is/are', 5),
  (5, 1, '的', 'de', 'de', 'of', 6),
  (6, 1, '狗', 'gǒu', 'gou', 'dog', 7),
  (7, 1, '猫', 'māo', 'mao', 'cat', 8),
  (8, 1, '惊人', 'jīngrén', 'jingren', 'amazing', 9),
  (9, 1, '正在', 'zhèngzài', 'zhengzai', 'being/currently', 10),
  (10, 1, '练习', 'liànxí', 'lianxi', 'practice', 11),
  (11, 1, '开发人员', 'kāifā rényuán', 'kaifa renyuan', 'developer', 12),
  (12, 1, '翻译', 'fānyì', 'fanyi', 'translate', null);

UPDATE "language" SET head = 1 WHERE id = 1;

-- because we explicitly set the id fields
-- update the sequencer for future automatic id setting
SELECT setval('word_id_seq', (SELECT MAX(id) from "word"));
SELECT setval('language_id_seq', (SELECT MAX(id) from "language"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;