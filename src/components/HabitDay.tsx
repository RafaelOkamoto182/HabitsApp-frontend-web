

/* Pode ser interface HabitProps ou type HabitProps, tanto faz. Fala as propriedades que o componente pode receber. */
/* Uma analogia com o html puro: seria as propriedades das tags. Por ex: a tag img tem o src, alt etc. */

import * as Popover from "@radix-ui/react-popover"
import * as Checkbox from '@radix-ui/react-checkbox'
import { ProgressBar } from "./ProgressBar"
import clsx from "clsx"
import { Check } from "phosphor-react"

interface HabitDayProps {
    completed: number
    amount: number
}

export function HabitDay(props: HabitDayProps) {
    const completedRatio = Math.round((props.completed / props.amount) * 100)

    return (

        /* Popover for the details of the day */
        <Popover.Root>
            <Popover.Trigger className={clsx('w-10 h-10  border-2  rounded-lg', {
                'bg-zinc-900 border-zinc-800': completedRatio === 0,
                'bg-violet-900 border-violet-700': completedRatio >= 0 && completedRatio < 20,
                'bg-violet-800 border-violet-600': completedRatio >= 20 && completedRatio < 40,
                'bg-violet-700 border-violet-500': completedRatio >= 40 && completedRatio < 60,
                'bg-violet-600 border-violet-500': completedRatio >= 60 && completedRatio < 80,
                'bg-violet-500 border-violet-400': completedRatio >= 80,

            })} />

            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                    <span className="font-semibold text-zinc-400">terça-feira</span>
                    <span className="mt-1 font-extrabold leading-tight text-3xl">17/01</span>

                    <ProgressBar progress={completedRatio} />

                    <div className="mt-6 flex flex-col gap-3">
                        <Checkbox.Root className="flex items-center gap-3 group"> {/* group: consegue utilizar estilizações pertencentes a um elemento porém em outro elmeentos dentro dele. Usa pra conseguir usar os data properties da checkbox (que vem no radix) lá na div */}

                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">

                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white" /> {/* Whats inside here just appear when checked. Thats why we need the div for the "unchecked" box */}
                                </Checkbox.Indicator>
                            </div>
                            <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                                Beber 2L de água
                            </span>

                        </Checkbox.Root>
                    </div>

                    <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>

        /* Para usar variaveis JS dentro do HTML precisa das {} */
        /* O className é igual o class do html, mas aqui n pode usar pq o class é uma palavra reservada do JS para criar classes. */

        /* Popover Arrow: é aquela flechinha tipo balao de diálogo que aparece no popover. Ela é um svg, entao por isso que a cor é mudada com fill e nao com bg-color */
    )
}