# Spaced repetition - Diglot API!

## Local dev setup

If using user `dunder-mifflin`:

```bash
mv example.env .env
createdb -U dunder-mifflin spaced-repetition
createdb -U dunder-mifflin spaced-repetition-test
```

If your `dunder-mifflin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=spaced-repetition-test npm run migrate
```

And `npm test` should work at this point

## Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g  on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

# Diglot 

Practice learning a language with the spaced reptition revision technique.

## Diglot Server Summary

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Intermittent Fasting tracker designed with both beginners and experienced users in mind. Through experimentation a user can time, track, update methods and review their fasting analytics. The user inteface can effortlessly initiate your personalized daily feast countdown after selecting 2 user settings. Finally a user can continue  to intelligently schedule the automation of each Intermittent Fast with a few clicks within any web browser or on their mobile device. 

```Diglot Client``` is the frontend for ```Diglot```. to see Diglot in action, checkout <a href='https://diglot.vercel.app'>Diglot</a>.

The ```Diglot``` backend can be found at: <a href='https://github.com/i-MCcarri/spaced-repetition-api'>Diglot-api</a>.

```Diglot``` will supports creating a user profile and Authentication with upcoming updates.

# API Documentation

## Auth Token Endpoint

### POST /api/auth/

Creates a new auth token for logged-in user.

### PUT /api/auth/

Creates Hash for storing password.

## Language Endpoint

### GET /api/language/

Provides object of Chinese Language, and references to the user via id. 

### GET /api/language/head

Privides the Head value of the Chinese Characters and words in a Linkedlist.

### POST /api/language/guess

Stores the user's guess of a translation to english.

## User Endpoint

### POST /api/user/

Creates a User object containing their name, username, and hashed password.

## Demo Account Details

username: admin
password: pass

## Let's Boost Our Metabilism

```Diglot``` is for the health enthusiast. We aim to provide a clean user experience while providing the necessary support to succeed in weigh management. ```Diglot```'s guided user experience allows the user to learn about the fundamentals of intermittent fasting, select a fasting option, and set a daily start time. 

## Features in Developement

The ```Diglot Client``` will continue to to grow. New User registration and login authentication are just around the corner. Plans to integrate diet and workout tracking are on the horizon. Push notifications, dual-authentication and personalized data reports are all in the pipeline. 

## Tech Behind the App

<strong>Backend</strong>
<ul>
<li>Express</li>
<li>Node</li>
<ul>
<li>Create Express Server</li>
<li>Node dotenv</li>
<li>Morgan</li>
<li>Cors</li>
<li>Helmet</li>
</ul>
</ul>

<strong>Testing</strong>
<ul>
<li>Mocha and Chai</li>
<li>Cypress</li>
</ul>

<strong>Production</strong>
<ul>
<li>Deployed via Heroku</li>
</ul>

## Setup

### local setup

clone this repository to your local machine

```git clone https://github.com/i-MCcarri/spaced-repetition-api```

Change directory into the cloned repository

``` cd spaced-repetition-api ```

Make a fresh start of the git history for this project

```git remote remove origin && git init```

Install the node dependencies

```npm install```

Follow the setup instructions to get ```Diglot``` up and running.

## Quick Start Scripts

start the application

```npm start``` 

## DEMOS

### Landing Page

<img src='https://github.com/i-MCcarri/Diglot/blob/main/src/images/splash.png?raw=true'/>

### Registration

<img src='https://github.com/i-MCcarri/Diglot/blob/main/src/images/reg.png?raw=true'/>

### Login

<img src='https://github.com/i-MCcarri/Diglot/blob/main/src/images/login.png?raw=true'/>

### Dashboard

<img src='https://github.com/i-MCcarri/Diglot/blob/main/src/images/home.png?raw=true'/>

### Learning

<img src='https://github.com/i-MCcarri/Diglot/blob/main/src/images/toolkit.png?raw=true'/>

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests mode `npm test`

Run the migrations up `npm run migrate`

Run the migrations down `npm run migrate -- 0`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
