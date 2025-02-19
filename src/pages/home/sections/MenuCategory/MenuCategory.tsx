import Category from "../../../../components/Category/Category";
import { categList, ICategoryContext, useCategContext } from "../../../../provider/CategoryProvider";

export default function MenuCategory() {
    const 
        { selectedCateg, addCategory, removeCategory } = useCategContext() as ICategoryContext        

    return (
        <div className="flex gap-2 w-full overflow-auto">
            {categList.map(element => (
                <Category label={element} key={element} addCategory={addCategory} removeCategory={removeCategory} isChecked={selectedCateg.has(element)}/>
            ))}
        </div>
    )
}