
/**
 *
 * Return true if the selected DOM-element found by given selector is visible and within the viewport.
 *
 * <example>
    :index.html
    <div id="notDisplayed" style="display: none"></div>
    <div id="notVisible" style="visibility: hidden"></div>
    <div id="notInViewport" style="position:absolute; left: 9999999"></div>
    <div id="zeroOpacity" style="opacity: 0"></div>
    :isDisplayedInViewport.js
    :isDisplayed.js
    it('should detect if an element is visible', () => {
        let isDisplayedInViewport = $('#notDisplayed').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false

        isDisplayedInViewport = $('#notVisible').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false

        isDisplayedInViewport = $('#notExisting').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false

        isDisplayedInViewport = $('#notInViewport').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false

        isDisplayedInViewport = $('#zeroOpacity').isDisplayedInViewport();
        console.log(isDisplayedInViewport); // outputs: false
    });
 * </example>
 *
 * @alias element.isDisplayedInViewport
 * @return {Boolean}            true if element(s)* [is|are] displayed
 * @uses protocol/selectorExecute, protocol/timeoutsAsyncScript
 * @type state
 *
 */

import { ELEMENT_KEY } from '../../constants'
import { getBrowserObject, hasElementId } from '../../utils'
import isDisplayedInViewportScript from '../../scripts/isDisplayedInViewport'

export default async function isDisplayedInViewport () {
    if (!await hasElementId(this)) {
        return false
    }

    return getBrowserObject(this).execute(isDisplayedInViewportScript, {
        [ELEMENT_KEY]: this.elementId, // w3c compatible
        ELEMENT: this.elementId // jsonwp compatible
    })
}
