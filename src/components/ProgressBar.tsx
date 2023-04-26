interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    return (
        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
            <div
                role="progressbar"
                aria-label="Progresso de hábitos completados nesse dia"
                aria-valuenow={props.progress}
                className="h-3 rounded-xl bg-violet-600"
                style={
                    { width: `${props.progress}%` }
                }
            /* role and aria is used to help screen readers. Radix also has a component for progress bar, but not used here */
            /* When we need to change the css using a variable, we usually dont use tailwind. React styles the field using objects sent in the "style" field */
            />
        </div>
    )
}