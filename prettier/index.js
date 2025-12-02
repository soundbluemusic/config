/**
 *  * @soundbluemusic/config - Shared Prettier configuration
  * 
   * Usage in your project's .prettierrc or prettier.config.js:
    * 
     * // .prettierrc
      * "@soundbluemusic/config/prettier"
       * 
        * // or prettier.config.js
         * import prettierConfig from '@soundbluemusic/config/prettier';
          * export default prettierConfig;
           */

           const prettierConfig = {
             semi: true,
               singleQuote: true,
                 tabWidth: 2,
                   trailingComma: 'es5',
                     printWidth: 80,
                       bracketSpacing: true,
                         arrowParens: 'always',
                           endOfLine: 'lf',
                             jsxSingleQuote: false,
                               bracketSameLine: false,
                               };

                               export default prettierConfig;
 */