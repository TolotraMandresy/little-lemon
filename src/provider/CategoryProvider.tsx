import React, { createContext, useContext, useReducer } from "react";

export interface ICategoryContext {
    selectedCateg: Set<string>;
    addCategory: (category: string) => void;
    removeCategory: (category: string) => void;
}

const CategoryContext = createContext<ICategoryContext | null>(null);

const CategoryProvider = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    function setSelectedReducer(state: Set<string>, action: { type: 'add' | 'remove'; element: string }): Set<string> {
        const newState = new Set(state)

        switch (action.type) {
            case 'add':
                newState.add(action.element);
                break
            case 'remove':
                newState.delete(action.element);
                break
            default:
                break
        }

        return newState
    }

    const [selectedCateg, dispatch] = useReducer(setSelectedReducer, new Set<string>());

    const addCategory = (category: string) => dispatch({ type: 'add', element: category });
    const removeCategory = (category: string) => dispatch({ type: 'remove', element: category });

    const contextValue: ICategoryContext = {
        selectedCateg,
        addCategory,
        removeCategory,
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            const mergedClasses = `${child.props.className || ''} ${className?.replace(/\bpx-[^\s]*/g, '')}`;
            return React.cloneElement(child, { className: mergedClasses.trim() });
        }

        return child;
    });

    return (
        <CategoryContext.Provider value={contextValue}>
            {childrenWithProps}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useCategContext = () => useContext(CategoryContext);
// eslint-disable-next-line react-refresh/only-export-components
export const categList = ["Lunch", "Mains", "Desserts", "A la carte", "Specials"]