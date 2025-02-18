import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import WithHeader from "../../layout/WithHeader/WithHeader";
import './Home.css'

export default function Home() {
    return (
        <WithHeader>
            <div className="flex flex-row justify-center border px-2 py-8 relative">
                <img id="bgimg" src="../../../public/img/illustr.webp" className="absolute -z-0 top-0 left-0 w-full h-full" alt="illustration" />

                <div className="flex flex-col gap-8 w-[60%] z-0" id="banner">
                    <div className="flex flex-col">
                        <h1 className="text-c-yellow text-5xl">Little Lemon</h1>
                        <h2 className="text-3xl text-c-font-secondary">Chicago</h2>
                    </div>

                    <p className="text-c-font-secondary">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>

                    <PrimaryButton label="Reserve a table" className="max-w-2"/>
                </div>
                <div className="flex justify-center items center w-[40%] z-0">
                    <img className="w-full h-auto aspect-square rounded-sm" src="../../../public/img/restauranfood.jpg" alt="foods" />
                </div>
            </div>
        </WithHeader>
    )
}