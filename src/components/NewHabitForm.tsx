import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

export function NewHabitForm() {
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])
    /* Here we are creating a state, which is a variable that can be monitored. Title is the variable and setTitle is the function to change that variable */
    /* <number[]> is used to say its a number array */

    function createNewHabit(event: FormEvent) {
        event.preventDefault()  /* used to avoid send the user to another page, which is default for forms submition */
        console.log(weekDays)
    }

    function handleToggleWeekDay(weekDay: number) {
        /* Used to handle the toggle before sending to the back end. */
        /* In react we dont modify states, we create new ones to ovewrite them. That's why we dont use the push or splice methods. Instead we create new arrays */
        if (weekDays.includes(weekDay)) {
            const newWeekDays = weekDays.filter(day => day !== weekDay)

            setWeekDays(newWeekDays)
            /* If the given day is already on the weekDays array, we take it out of it (uncheck the box) */

        } else {
            const newWeekDays = [...weekDays, weekDay]

            setWeekDays(newWeekDays)
            /* If the given day is not on the weekDays array, we create another array including it */
        }
    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual seu comprometimento?
            </label>

            <input type="text"
                id="title"
                placeholder="ex: Exercícios, dormir bem etc."
                autoFocus
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                onChange={(event) => setTitle(event.target.value)}  /* changes the state of 'title' */
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrência?
            </label>

            <div className="flex flex-col gap-2 mt-3">
                {availableWeekDays.map((weekDay, index) => {
                    return (
                        <Checkbox.Root
                            onCheckedChange={() => handleToggleWeekDay(index)}
                            key={weekDay}
                            className="flex items-center gap-3 group"> {/* group: consegue utilizar estilizações pertencentes a um elemento porém em outro elmeentos dentro dele. Usa pra conseguir usar os data properties da checkbox (que vem no radix) lá na div */}

                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">

                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white" /> {/* Whats inside here just appear when checked. Thats why we need the div for the "unchecked" box */}
                                </Checkbox.Indicator>
                            </div>
                            <span className="text-white leading-tight">
                                {weekDay}
                            </span>

                        </Checkbox.Root>
                    )
                })}
            </div>

            <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>

    )
}