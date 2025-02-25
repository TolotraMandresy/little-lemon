import { render, screen, fireEvent } from "@testing-library/react";
import CategoryProvider , { ICategoryContext, useCategContext, categList } from "../CategoryProvider.tsx";

// Mock Component to Test the Context
const CategoryTestComponent = () => {
    const { selectedCateg, addCategory, removeCategory } = useCategContext() as ICategoryContext;

    return (
        <div>
            <h2>Selected Categories</h2>
            <div data-testid="selected-categories">
                {Array.from(selectedCateg).map((category) => (
                    <span key={category}>{category}</span>
                ))}
            </div>

            <h3>Available Categories</h3>
            {categList.map((category) => (
                <button
                    key={category}
                    onClick={() => addCategory(category)}
                    data-testid={`add-${category}`}
                >
                    Add {category}
                </button>
            ))}

            {categList.map((category) => (
                <button
                    key={category}
                    onClick={() => removeCategory(category)}
                    data-testid={`remove-${category}`}
                >
                    Remove {category}
                </button>
            ))}
        </div>
    );
};

// Test Suite
describe("CategoryProvider", () => {
    it("should add categories to the selected set", () => {
        render(
            <CategoryProvider>
                <CategoryTestComponent />
            </CategoryProvider>
        );

        expect(screen.queryByTestId("selected-categories")?.textContent).toBe("");

        const addLunchButton = screen.getByTestId("add-Lunch");
        fireEvent.click(addLunchButton);

        expect(screen.getByText("Lunch").firstChild?.textContent).toBe("Lunch");
        // console.assert(false, screen.getByText("Lunch").firstChild?.textContent);
        
    });

    it("should remove categories from the selected set", () => {
        render(
            <CategoryProvider>
                <CategoryTestComponent />
            </CategoryProvider>
        );

        // Initially, no categories should be selected
        expect(screen.queryByTestId("selected-categories")).toBeEmptyDOMElement();

        // Add and then remove "Mains" category
        const addMainsButton = screen.getByTestId("add-Mains");
        fireEvent.click(addMainsButton);

        const removeMainsButton = screen.getByTestId("remove-Mains");
        fireEvent.click(removeMainsButton);

        // After removing, "Mains" should not be in the selected categories
        expect(screen.queryByText("Mains")).toBeNull();
    });

    it("should handle adding and removing multiple categories", () => {
        render(
            <CategoryProvider>
                <CategoryTestComponent />
            </CategoryProvider>
        );

        const addLunchButton = screen.getByTestId("add-Lunch");
        const addSpecialsButton = screen.getByTestId("add-Specials");
        fireEvent.click(addLunchButton);
        fireEvent.click(addSpecialsButton);

        // Ensure both "Lunch" and "Specials" are selected
        expect(screen.getByText("Lunch")).toBeInTheDocument();
        expect(screen.getByText("Specials")).toBeInTheDocument();

        // Remove "Lunch" category
        const removeLunchButton = screen.getByTestId("remove-Lunch");
        fireEvent.click(removeLunchButton);

        // Ensure only "Specials" is selected
        expect(screen.queryByText("Lunch")).toBeNull();
        expect(screen.getByText("Specials")).toBeInTheDocument();
    });
});
