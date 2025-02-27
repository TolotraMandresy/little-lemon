import React from "react";
import Header from "../../components/Header/Header";
/**
 *  p-2 mobil
*/
export default function WithHeader({ children, className, onLogout }: { children: React.ReactNode, className?: string, onLogout: () => void }) {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            const mergedClasses = `${child.props.className || ''} ${className}`;
            return React.cloneElement(child, { className: mergedClasses.trim() } as React.HTMLAttributes<HTMLElement>);
        }

        return child;
    });

    return (
        <div className={`flex flex-col items-center h-lvh overflow-auto gap-4 px-2 bg-c-font-secondary`}>
            <Header className={`sticky top-0 ${className} px-0!`} onLogout={onLogout}></Header>

            <main id="main-container" className={`flex flex-col items-center gap-12 w-full z-0 bg-c-font-secondary ${className}`}>
                {childrenWithProps}
            </main>
        </div>
    )
}