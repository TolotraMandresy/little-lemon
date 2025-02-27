export default function MealCard({ meal }: { meal: Meal }) {
    return (
        <div className="flex flex-row items-center w-full gap-4 py-4 border-b-1 border-c-grey-light">
            <div className="flex flex-col w-full gap-4">
                <h4 className="text-xl font-bold">{meal.name}</h4>
                <p className="text-c-green font-normal overflow-hidden text-ellipsis whitespace-normal line-clamp-2">{meal.descri}</p>
                <p className="text-c-green font-bold">{meal.price}</p>
            </div>

            <div className="flex w-[30%] min-w-[100px]">
                <img src={meal.img} alt={meal.name + " illustration"} className="w-full h-max aspect-square rounded-sm" />
            </div>
        </div>
    )
}