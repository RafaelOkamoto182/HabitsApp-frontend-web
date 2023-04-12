import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

//to avoid the page being too empty at the beggining of the year, we set a mininum number of days (squares) to show
const minimumSummaryDates = 18 * 7  //18 weeks
const qtyOfFillingSquares = minimumSummaryDates - summaryDates.length  //the quantity of "filling" squares, just to complete the table

export function SummaryTable() {
    return (
        <div className="w-full flex">
            {/* table area */}

            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {/* table headers */}

                {weekDays.map((weekDay, index) => {
                    return (
                        <div key={`${weekDay}-${index}`}
                            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
                        >
                            {/* It's a way to avoid using 7 divs. But to use map, the react needs a unique key for every element, thats why we created the simple key above */}
                            {weekDay}
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">

                {summaryDates.map((date) => {
                    return <HabitDay key={date.toString()} />

                })}

                {/* if we need filling squares, we return them with a lower opacity (40) and cursor not allowed */}
                {qtyOfFillingSquares > 0 && Array.from({ length: qtyOfFillingSquares }).map(() => {
                    return (
                        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
                    )
                })}



            </div>



        </div>






    )
}