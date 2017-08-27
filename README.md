# Gym Trainer App

## Setup
1. Clone the repository
2. Run `npm install` or `yarn install` to install dependencies
3. Setup db connection string in config.js
    - eg: `mongodb://localhost:27017/edgegym`
4. Start an instance of the mongo daemon `mongod`
    - Run instance `localhost` on the default port (`27017`)
6. Run the app `npm run start:dev`. This will start the app with hot loading and nodemon on `http://localhost:4000`

## Coding Conventions
1. Internal variables in lower camelCase
2. External variables, Classes, Interfaces and Files in upper CamelCase
3. Don't abbreviate local variables
4. Use double quotes for strings
