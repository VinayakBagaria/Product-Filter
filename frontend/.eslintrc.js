const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  parser: 'babel-eslint',
  // stop eslint from looking for a config file in parent folders
  root: true,
  rules: {
    'prettier/prettier': ERROR,
    /*
    If a JS object has a setter for a property, make sure there exists a getter property to read it. Reverse may not be true.
    */
    'accessor-pairs': OFF,
    // allows omitting parens when there is only 1 arg
    'arrow-parens': [ERROR, 'as-needed'],
    // spacing before and after the arrow
    'arrow-spacing': [ERROR, { before: true, after: true }],
    /*
    One True Brace Style - opening brace of a block is placed on the same line as its corresponding statement or declaration. Like for func, if, try, loops
    */
    'brace-style': [ERROR, '1tbs'],
    /*
    requires trailing commas when last prop is in a diff line than closing ] or },
    disallow trailing commas when last element is on the same line as a closing ] or }
    */
    'comma-dangle': [ERROR, 'always-multiline'],
    // use dot notation whenever possible, like error on foo['bar']
    'dot-notation': ERROR,
    // requires end of line always
    'eol-last': ERROR,
    // enforce strict equality except when comparing with null literal
    eqeqeq: [ERROR, 'allow-null'],
    // prefer using double quotes in jsx whenever possible
    'jsx-quotes': [ERROR, 'prefer-double'],
    // allow spacing before and after keywords like func, if, loops
    'keyword-spacing': [ERROR, { after: true, before: true }],
    // devDependencies can be imported, only for redux-devtools
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
    // no function declaration in nested blocks, such as inside if
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    // dont use with statement in js
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    /*
    Shadowing is the process by which a local variable shares the same name as a variable in its containing scope. Eliminate shadowed variables declarations.
    */
    'no-shadow': ERROR,
    // all named args must be used, and there must be no unused variables
    'no-unused-vars': [ERROR, { args: 'all' }],
    // unnecessary to concatenate two strings together
    'no-useless-concat': ERROR,
    /*
    allow use of single quotes wherever possible
    avoidEscape: var double = "a string containing 'single' quotes"; is correct
    */
    quotes: [
      ERROR,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    /*
    applied on blocks that don't begin on a new line
    ignore spacing b/w => and block - arrow-spacing
    ignore spacing b/w a keyword and a block - keyword-spacing
    */
    'space-before-blocks': ERROR,
    // always require a space b/w func name and (
    'space-before-function-paren': ERROR,

    // React and JSX
    // not use ={true} when passing truthy values as props
    'react/jsx-boolean-value': [ERROR, 'never'],
    // allow JSX to be used only in .js files
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }],
    /*
    Components without children can be self-closed to avoid unnecessary extra closing tag.
    */
    'react/self-closing-comp': ERROR,
    'react/no-unused-state': ERROR,
    // allow default values for unrequired props
    'react/default-props-match-prop-types': OFF,
    'react/forbid-prop-types': OFF,
    'react/no-did-mount-set-state': OFF,
  },
  env: {
    browser: true,
  },
};
