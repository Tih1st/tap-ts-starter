/** Parse YAMl files using yamljs (yaml2json) (https://www.npmjs.com/package/yamljs)
 *
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
/* 
Updated mailparser to 2.2.0 to avoid malicious getcookies module; see https://blog.npmjs.org/post/173526807575/reported-malicious-module-getcookies
Consider mailparse (https://github.com/javascriptlove/mailparse) for the future, since mailparser will no longer be maintained. Mailparse does not yet have any TypeScript types available.
*/
import * as anyJson from 'any-json'
import * as tapTypes from './tap-types'

/** Convert the Mime message into json */
export function parseItem(test: Buffer) {
  return anyJson.decode(test.toString(), 'yaml').then(function(yamlObj) {
    let rec = new tapTypes.streamRecord()
    rec.stream = 'yaml'
    rec.time_extracted = new Date()
    rec.record = yamlObj
    return rec
  })
}
