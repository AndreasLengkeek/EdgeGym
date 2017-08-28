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
1. Comment Classes, Components, Fields and Functions with a block comment.
```javascript
/**
 * Class creates a new inline form and returns it as a
 * JSX element from the previous element passed.
 */
export default class LoginForm extends React.Component {

/**
* Returns a component from the such and such class.  
* @param jsxComponent
* @return newJsxComponent
*/
handleInputChange(e) {
```
2. Inline commenting in complex code that is not self explanatory.
```
<!-- This is a html comment --> OR // Javascript comments that are inline.
```

### Indent Style
1. We use spaces not tabs for indentation as spaces can be transferred across environments where tabs may not.
2. Each time a new block or block-like construct is opened, the indent increases by 2 spaces.
3. When the block ends, the indent returns to the previous indent level. The indent level applies to both code and comments throughout the block.
```html
<!--
  This comment is 2 space indented.
  The below div displays an unordered list for topics.
-->
<div>
  <ul>
    <li></li>
    <li></li>
  </ul>
</div>
```
4. Indent continuation lines at 4 spaces
```javascript
var newTime = calculationOfTime / oldTime +
    (countOfSeconds * minutesPassed) +
        calculationOfTime / oldTime +
            (countOfSeconds * minutesPassed);
```
### Line Length
1. Do not exceed a line length of 80 characters
2. A line length can be ignored for the following: (a long URL or a shell command intended to be copied-and-pasted)
3. Line Wrapping can be used (Definition: breaking a single expression into multiple lines)
4. Breaking the expression onto multiple lines is preferred at a high syntactic level.

*Preferred*
```
currentEstimate =
    calc(currentEstimate + x * currentEstimate) /
        2.0f;
```
*Discouraged*
```
currentEstimate = calc(currentEstimate + x *
    currentEstimate) / 2.0f;
```
### Naming
1. Internal variables in lower camelCase
2. External variables, Classes, Interfaces and Files in upper CamelCase
3. Constants are in UPPERCASE_WITH_UNDERSCORES
4. Don't abbreviate local variables
5. Use double quotes for strings
