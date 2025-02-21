import Category from "../../../../components/Category/Category";
import { categList, ICategoryContext, useCategContext } from "../../../../provider/CategoryProvider";

export default function MenuCategory({className} : {className?: string}) {
    const 
        { selectedCateg, addCategory, removeCategory } = useCategContext() as ICategoryContext        

    return (
        <div className={`flex flex-col gap-2 w-full ${className}`}>
            <p className="font-extrabold text-2xl">Order for delivery!</p>

            <div className="flex flex-row gap-2 w-full overflow-auto">
                {categList.map(element => (
                    <Category label={element} key={element} addCategory={addCategory} removeCategory={removeCategory} isChecked={selectedCateg.has(element)}/>
                ))}
            </div>
        </div>
    )
}