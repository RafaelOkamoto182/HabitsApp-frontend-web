import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {

    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()

    //array that will store all the dates up to now
    const dates = []
    let compareDate = firstDayOfTheYear

    //iterate over all the dates until today and populate the dates array.
    while (compareDate.isBefore(today)) {

        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')

    }

    return dates
}