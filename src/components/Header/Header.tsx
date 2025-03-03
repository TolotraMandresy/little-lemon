import { useState } from "react";
import './Header.css';
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function Header({ className, onLogout }: { className?: string, onLogout: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return (
        <>
            <header className={`flex w-full justify-between items-center bg-c-font-secondary z-10 ${className}`}>
                <button name="open sidebar" onClick={open} className="aspect-square p-2 w-15 flex justify-center items-center rounded-sm">
                    <img src="/icons_assets/icon _hamburger menu_.svg" alt="Menu icon" />
                </button>

                <div className="h-full w-auto px-4 py-2">
                    <img src="/icons_assets/Logo.svg" className='m-auto' alt="logo" />
                </div>

                <button name="Basket" className="aspect-square p-2 w-14 flex justify-center items-center rounded-sm">
                    <img src="/icons_assets/Basket.svg" className='m-auto' alt="logo" />
                </button>
            </header>

            <nav className={`flex flex-col justify-between w-full h-lvh p-8 absolute text-c-font-secondary bg-c-green-opaque z-20 ${isOpen ? 'isOpen' : ''}`}>
                <button className="ml-auto text-xl" onClick={close}>&times;</button>
                
                <div className="flex flex-col gap-4 text-center">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

                <PrimaryButton className="max-w-[400px]! mx-auto" label="Sign out" onClick={onLogout}></PrimaryButton>
            </nav>
        </>
    );
}