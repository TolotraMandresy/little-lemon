import Category from "../../../../components/Category/Category";

export default function MenuCategory() {
    const list = ["Lunch", "Mains", "Desserts", "A la carte", "Specials"]

    return (
        <div className="flex gap-2">
            {list.map(element => (
                <Category label={element} key={element} /> // Important: Add a unique key prop
            ))}
        </div>
    )
}