/**
 * 
 * @param {string} txt - The input text to be sliced
 * @param {string} [maxLen=50] - The maximum length before trunaction
 * @returns {string} - The sliced text, with an ellipsis (...) appeaned if truncated
 */

export function txtSlicer(txt: string, maxLen: number = 50) {
    if (txt.length >= maxLen) {
        return `${txt.slice(0, maxLen)} ...`
    }
    return txt
}