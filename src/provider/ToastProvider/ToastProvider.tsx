import { createContext, useContext, useState } from "react";

export interface IToastContext {
    isOpen: boolean;
    message: string;
    openToast: (message: string) => void;
    closeToast: () => void;
}

const ToastContext = createContext<IToastContext | null>(null);

export default function ToastProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    function openToast(message: string) {
        setMessage(message);
        setIsOpen(true);
    }

    function closeToast() {
        setMessage("");
        setIsOpen(false);
    }

    return (
        <ToastContext.Provider value={{ isOpen, openToast, closeToast, message }}>
            {children}
        </ToastContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToastContext = () => useContext(ToastContext);