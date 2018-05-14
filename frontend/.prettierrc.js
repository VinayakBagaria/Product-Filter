module.exports = {
  /*
    Print spaces b/w brackets in obj literals
    true - Example: { foo: bar }.
    false - Example: {foo: bar}.
  */
  bracketSpacing: true,
  /*
   use single quotes instead of double. Quotes in JSX will always be double and ignore this setting
 */
  singleQuote: true,
  /*
   put > of a multi-line jsx element being alone on next line
 */
  jsxBracketSameLine: false,
  /*
   trailing commas wherever valid in ES5, like in objs and arrays
 */
  trailingComma: 'es5',
  // Specify the line length that the printer will wrap on
  printWidth: 80,
  tabWidth: 2,
  // Omit parens when possible. Example: x => x
  arrowParens: 'avoid',
};
