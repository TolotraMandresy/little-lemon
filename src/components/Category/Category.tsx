import { useState } from "react"

export default function Category({ label }: { label: string }) {
    const [isChecked, setIsChecked] = useState(false)

    function checkHandler() {
        setIsChecked(!isChecked)
    }

    return (
        <>
            <input type="checkbox" name={label} id={`${label}-checkbox`} className="hidden" checked={isChecked} onChange={checkHandler} />
            <label htmlFor={`${label}-checkbox`} className={`select-none flex w-max text-nowrap px-3 py-1 rounded-full font-medium ${isChecked ? "bg-c-green text-c-font-secondary" : "bg-c-grey-light text-c-green"}`}>{label}</label>
        </>
    )
}