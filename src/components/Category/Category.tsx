import { useState } from "react"

export default function Category({ label, addCategory, removeCategory, isChecked }: { label: string, addCategory : (el: string) => void, removeCategory : (el: string) => void, isChecked? : boolean  }) {
    const [checked, setIsChecked] = useState(!!isChecked)

    function checkHandler() {
        if(checked) removeCategory(label)
        else addCategory(label)

        setIsChecked(!checked)
    }

    return (
        <>
            <input type="checkbox" name={label} id={`${label}-checkbox`} className="hidden" checked={checked} onChange={checkHandler} />
            <label htmlFor={`${label}-checkbox`} className={`select-none flex w-max h-max text-nowrap m-0.5 px-3 py-1 rounded-full font-medium transition-transform hover:scale-105 hover:outline hover:outline-c-green ${checked ? "bg-c-green text-c-font-secondary" : "bg-c-grey-light text-c-green"}`}>{label}</label>
        </>
    )
}