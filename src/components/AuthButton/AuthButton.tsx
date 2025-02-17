import React from "react";
import './AuthButton.css'

export default function Authbutton({ children }: { children: React.ReactNode }) {

    return (
        <button className="border-1 border-c-green rounded-sm aspect-square p-2 hover:bg-c-green focus:bg-c-green">
            {children}
        </button>
    )
}