/**
 * @soundbluemusic/config - Shared Browserslist configuration
 *
 * Usage in your project's package.json:
 *
 * {
 *   "browserslist": ["extends @soundbluemusic/config/browserslist"]
 * }
 *
 * Or create a .browserslistrc file:
 * extends @soundbluemusic/config/browserslist
 */

const browserslistConfig = [
  '> 0.5%',
  'last 2 versions',
  'Firefox ESR',
  'not dead',
  'not IE 11',
  'not op_mini all',
];

export default browserslistConfig;
