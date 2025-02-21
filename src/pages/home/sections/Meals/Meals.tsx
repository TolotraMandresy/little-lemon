import MealCard from "../../../../components/MealCard/MealCard";

export default function Meals(){
    return (
        <div className="flex flex-col w-full">
            <MealCard meal={{name: "Greak Salad", descri: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: "4$", img:"/img/greek-salad.jpg"}}/>            
        </div>
    )
}