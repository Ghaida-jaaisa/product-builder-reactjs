export function txtSlicer(txt: string, maxLen: number = 50) {
    if (txt.length >= maxLen) {
        return `${txt.slice(0, maxLen)} ...`
    }
    return txt
}