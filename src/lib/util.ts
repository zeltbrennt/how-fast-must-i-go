export  function hoursToString(value: number): string {
    const hours = Math.floor(value)
    const minutes = Math.floor((value - hours) * 60)
    if (value <= 0) return "no time"
    if (hours == 0) return `${minutes} minutes`
    if (minutes == 0) return `${hours} hours`
    return `${hours} hours and ${minutes} minutes`
}