export function formatDate(timeStamp) {
    const d = new Date(timeStamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substring(0, 5) + time.slice(-2) + '|' + d.toLocaleDateString()
}