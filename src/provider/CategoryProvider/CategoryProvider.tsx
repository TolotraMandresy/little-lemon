import React, { createContext, useContext, useMemo, useReducer } from "react";

export interface ICategoryContext {
    selectedCateg: Set<string>;
    addCategory: (category: string) => void;
    removeCategory: (category: string) => void;
    filteredMeals: Meal[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const categList = ["Lunch", "Mains", "Desserts", "A la carte", "Specials"]

const meals: Meal[] = [
    { name: "Greak Salad", descri: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: "4$", img: "/img/greek-salad.jpg", type: "Specials" },
    { name: "Pasta", descri: "Delicious pasta", price: "10$", img: "/img/pasta.jpg", type: "Mains" },
    { name: "Cake", descri: "Chocolate cake", price: "5$", img: "/img/cake.jpg", type: "Desserts" },
    { name: "Burger", descri: "Big burger", price: "7$", img: "/img/burger.jpg", type: "Lunch" },
    { name: "Steak", descri: "Juicy steak", price: "15$", img: "/img/steak.jpg", type: "A la carte" },
]

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

    const filteredMeals = useMemo(() => {
        if (selectedCateg.size === 0) {
            return meals;
        }

        return meals.filter((meal) => selectedCateg.has(meal.type));
    }, [selectedCateg, meals]);

    const contextValue: ICategoryContext = {
        selectedCateg,
        addCategory,
        removeCategory,
        filteredMeals
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            const mergedClasses = `${child.props.className || ''} ${className?.replace(/\bpx-[^\s]*/g, '')}`;
            return React.cloneElement(child, { className: mergedClasses.trim() } as React.HTMLAttributes<HTMLElement>);
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