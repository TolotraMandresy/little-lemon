import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import WithHeader from "../../layout/WithHeader/WithHeader";
import './Home.css'
import MenuCategory from "./sections/MenuCategory/MenuCategory";

export default function Home() {
    return (
        <WithHeader>
            <div className="flex flex-row gap-4 justify-evenly border px-2 py-8 relative">
                <img id="bgimg" src="/img/illustr.webp" className="absolute -z-0 top-0 left-0 w-full h-full" alt="illustration" />

                <div className="flex flex-col gap-4 w-[60%] max-w-[250px] z-0" id="banner">
                    <div className="flex flex-col">
                        <h1 className="text-c-yellow text-7xl whitespace-nowrap">Little Lemon</h1>
                        <h2 className="text-5xl text-c-font-secondary">Chicago</h2>
                    </div>

                    <p className="text-c-font-secondary">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>

                    <PrimaryButton label="Reserve a table" className="mt-12" style={{'max-width': 'max-content'}}/>
                </div>
                <div className="flex items-center w-[40%] max-w-[180px] translate-y-3">
                    <img className="w-full h-max aspect-square rounded-sm" src="/img/restauranfood.jpg" alt="foods" />
                </div>
            </div>

            <MenuCategory/>
        </WithHeader>
    )
}