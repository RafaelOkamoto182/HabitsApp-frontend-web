

/* Pode ser interface HabitProps ou type HabitProps, tanto faz. Fala as propriedades que o componente pode receber. */
/* Uma analogia com o html puro: seria as propriedades das tags. Por ex: a tag img tem o src, alt etc. */

import * as Popover from "@radix-ui/react-popover"
import { ProgressBar } from "./ProgressBar"
import clsx from "clsx"

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

                    <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>

        /* Para usar variaveis JS dentro do HTML precisa das {} */
        /* O className é igual o class do html, mas aqui n pode usar pq o class é uma palavra reservada do JS para criar classes. */

        /* Popover Arrow: é aquela flechinha tipo balao de diálogo que aparece no popover. Ela é um svg, entao por isso que a cor é mudada com fill e nao com bg-color */
    )
}