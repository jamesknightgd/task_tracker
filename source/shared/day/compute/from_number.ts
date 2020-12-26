import Day from "../interface"

export default function computeDayStringFromNumber(day: number): Day
{
    switch(day)
    {
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        default: throw `Expected day number to be in range of [0, 6]. Provided day number: ${day}.`
    }
}