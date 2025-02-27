import React, { createContext, useContext, useMemo, useReducer } from "react";

export interface ICategoryContext {
    selectedCateg: Set<string>;
    addCategory: (category: string) => void;
    removeCategory: (category: string) => void;
    filteredMeals: Meal[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const categList = ["Lunch", "Mains", "Desserts", "A la carte", "Specials"];

const meals: Meal[] = [
  {
    name: "Greek Salad",
    descri:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "4$",
    img: "/img/greek-salad.jpg",
    type: "Specials",
  },
  {
    name: "Bruschetta",
    descri:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
    price: "7.99$",
    img: "/img/bruschetta.webp",
    type: "A la carte",
  },
  {
    name: "Grilled Fish",
    descri:
      "Perfectly grilled fish, seasoned with herbs and lemon, served with a side of roasted vegetables. A light and healthy lunch option.",
    price: "20$",
    img: "/img/fish.webp",
    type: "Lunch",
  },
  {
    name: "Pasta",
    descri:
      "A classic Italian pasta dish, cooked al dente and tossed in a rich tomato sauce with fresh basil and parmesan cheese. A hearty and satisfying main course.",
    price: "18.99$",
    img: "/img/pasta.webp",
    type: "Mains",
  },
  {
    name: "Lemon Dessert",
    descri:
      "A tangy and refreshing lemon dessert, featuring a creamy lemon custard layered with a light sponge cake. A perfect sweet ending to your meal.",
    price: "6.99$",
    img: "/img/lemon-dessert.webp",
    type: "Desserts",
  },
];

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