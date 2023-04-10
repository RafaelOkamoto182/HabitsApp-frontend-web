interface HabitProps {
    completed: number
}

/* Pode ser interface HabitProps ou type HabitProps, tanto faz. Fala as propriedades que o componente pode receber. */
/* Uma analogia com o html puro: seria as propriedades das tags. Por ex: a tag img tem o src, alt etc. */

export function Habit(props: HabitProps) {
    return (

        <div className='bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center'>
            {props.completed}
        </div>

        /* Para usar variaveis JS dentro do HTML precisa das {} */
        /* O className é igual o class do html, mas aqui n pode usar pq o class é uma palavra reservada do JS para criar classes. */
    )
}