import './PrimaryButton.css'

export default function PrimaryButton(props: { label: string, className: string, [k: string]: unknown }) {
    const { label, className, ...remainingProps } = props;

    return (
        <button {...remainingProps} className={`w-full bg-c-yellow disabled:bg-c-grey text-c-font-secondary rounded-full px-6 py-2 ${className}`}>
            {label}
        </button>
    )
}