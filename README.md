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
### Comments
### Indent Style
1. We use spaces not tabs for indentation as spaces can be transferred across environments where tabs may not.
2. Each time a new block or block-like construct is opened, the indent increases by 2 spaces.
3. When the block ends, the indent returns to the previous indent level. The indent level applies to both code and comments throughout the block.
    - Example:
    ```html
    <\!--
      Display the unordered list of options within
      the such and such Div. Notice the 2 spacing indent style.
    -->
    <div>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    ```
### Line Length
1. Do not exceed a line length of 80 characters
2. A line length can exceed 80 characters if the end is of a URL.
### Naming
1. Internal variables in lower camelCase
2. External variables, Classes, Interfaces and Files in upper CamelCase
3. Don't abbreviate local variables
4. Use double quotes for strings
