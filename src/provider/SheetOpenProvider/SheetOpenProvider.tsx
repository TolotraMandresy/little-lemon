import { createContext, useContext, useState } from "react";

export interface ISheetIsOpenContext {
    isSheetOpen: boolean;
    openSheet: () => void;
    closeSheet: () => void;
}

const SheetOpentContext = createContext<ISheetIsOpenContext | null>(null);

export default function SheetOpenProvider({ children }: { children: React.ReactNode }) {
    const [isSheetOpen, setIsOpen] = useState(false);

    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
        <SheetOpentContext.Provider value={{ isSheetOpen, openSheet, closeSheet }}>
            {children}
        </SheetOpentContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSheetOpenContext = () => useContext(SheetOpentContext);