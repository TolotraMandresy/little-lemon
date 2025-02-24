import MealCard from "../../../../components/MealCard/MealCard";
import { ICategoryContext, useCategContext } from "../../../../provider/CategoryProvider/CategoryProvider";

export default function Meals() {
    const { filteredMeals } = useCategContext() as ICategoryContext

    return (
        <div className="flex flex-col w-full">
            {filteredMeals.map(meal => {
                return <MealCard meal={meal} key={meal.name}/>
            })}

            {/* <MealCard meal={{ name: "Greak Salad", descri: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: "4$", img: "/img/greek-salad.jpg", type: "Specials" }} /> */}
        </div>
    )
}