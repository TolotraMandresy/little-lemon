import './PrimaryButton.css'

export default function PrimaryButton(props: { label: string, [k: string]: unknown }) {
    const { label, ...remainingProps } = props;

    return (
        <button {...remainingProps} className="w-full bg-c-yellow text-c-font-secondary rounded-full px-6 py-2">
            {label}
        </button>
    )
}