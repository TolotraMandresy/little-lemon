import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function MealCard({ meal }: { meal: Meal }) {
    return (
        <div className="flex flex-row items-center w-full gap-4 py-4 border-b-1 border-c-grey-light">
            <div className="flex flex-col w-full gap-4">
                <div className="flex gap-2">
                    <h4 className="text-xl font-bold">{meal.name}</h4>

                    <p>{meal.price}</p>
                </div>
                <p>{meal.descri}</p>
                <PrimaryButton label="Add to cart" className="w-max"/>
            </div>

            <div className="flex w-[30%] min-w-[100px]">
                <img src={meal.img} alt={meal.name + " illustration"} className="w-full h-max aspect-square rounded-sm" />
            </div>
        </div>
    )
}