import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import WithHeader from "../../layout/WithHeader/WithHeader";
import './Home.css'
import MenuCategory from "./sections/MenuCategory/MenuCategory";
import CategoryProvider from "../../provider/CategoryProvider/CategoryProvider";
import Meals from "./sections/Meals/Meals";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import Toast from "../../components/Toast/Toast";
import SheetOpenProvider, { ISheetIsOpenContext, useSheetOpenContext } from "../../provider/SheetOpenProvider/SheetOpenProvider";

function Content() {
    const { openSheet } = useSheetOpenContext() as ISheetIsOpenContext;

    return (
        <WithHeader className="max-w-[900px] px-2">
            <div className="flex flex-row w-full gap-4 justify-between px-4 py-8 relative">
                <img id="bgimg" src="/img/illustr.webp" className="rounded-md absolute -z-0 top-0 left-0 w-screen h-full" alt="illustration" />

                <div className="flex flex-col gap-4 w-[60%] max-w-[250px] z-0" id="banner">
                    <div className="flex flex-col">
                        <h1 className="text-c-yellow text-7xl whitespace-nowrap">Little Lemon</h1>
                        <h2 className="text-5xl text-c-font-secondary">Chicago</h2>
                    </div>

                    <p className="text-c-font-secondary">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>

                    <PrimaryButton onClick={()=>{console.log("ito");openSheet()}} label="Reserve a table" className="mt-12" style={{ 'maxWidth': 'max-content' }} />
                </div>
                <div className="flex items-center w-[40%] max-w-[180px] translate-y-3">
                    <img className="w-full h-max aspect-square rounded-sm" src="/img/restauranfood_20.webp" alt="foods" />
                </div>
            </div>

            <CategoryProvider>
                <MenuCategory />
                <Meals />
            </CategoryProvider>
            <BottomSheet />
        </WithHeader>
    )
}

export default function Home() {
    return (
        <>
            <SheetOpenProvider>
                <Content />
            </SheetOpenProvider>

            <Toast isOpen={true} message="We registered your reservation." />
        </>
    )
}