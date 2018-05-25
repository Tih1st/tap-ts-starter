// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class DummyClass {}

const anyjson = require('any-json')
console.log('working!') /** hack for https://github.com/TypeStrong/typedoc/issues/603 */

/**
 * This module is the entry point for local execution as a Singer tap (see the [spec](https://github.com/singer-io/getting-started/blob/master/SPEC.md))
 */

import * as parseYaml from './parse-yaml'
import * as configLoader from './tap-load-config'
//import * as parseMime from './parse-mime'
import * as scanDir from './scan-dir'

/** random note */

/** random note 2
 *
 */
configLoader
  .loadConfig()
  .then(function(configObjs) {
    // run scanDir using parseMime as the parser for each item
    return scanDir.scanDir(configObjs, parseYaml.parseItem)
  })
  .catch(function(error) {
    // Handle errors
    console.error('Error: ', error)
    return error
  })
