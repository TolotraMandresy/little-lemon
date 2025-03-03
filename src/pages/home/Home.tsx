import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import WithHeader from "../../layout/WithHeader/WithHeader";
import './Home.css'
import MenuCategory from "./sections/MenuCategory/MenuCategory";
import CategoryProvider from "../../provider/CategoryProvider/CategoryProvider";
import Meals from "./sections/Meals/Meals";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import Toast from "../../components/Toast/Toast";
import SheetOpenProvider, { ISheetIsOpenContext, useSheetOpenContext } from "../../provider/SheetOpenProvider/SheetOpenProvider";
import ToastProvider from "../../provider/ToastProvider/ToastProvider";

function Content({onLogout}: {onLogout: () => void}) {
    const { openSheet } = useSheetOpenContext() as ISheetIsOpenContext;

    return (
        <WithHeader onLogout={onLogout} className="max-w-[900px] xl:max-w-[1200px] px-2">
            <div className="flex flex-row w-full gap-4 justify-around px-4 py-8 relative md:px-8 md:py-16">
                <img id="bgimg" src="/img/illustr.webp" className="rounded-md absolute -z-0 top-0 left-0 w-screen h-full" alt="illustration" />

                <div className="flex flex-col lg:justify-center gap-4 w-[60%] max-w-[250px] lg:max-w-[400px] z-0" id="banner">
                    <div className="flex flex-col">
                        <h1 className="text-c-yellow text-7xl whitespace-nowrap">Little Lemon</h1>
                        <h2 className="text-5xl text-c-font-secondary">Chicago</h2>
                    </div>

                    <p className="text-c-font-secondary">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>

                    <PrimaryButton onClick={openSheet} label="Reserve a table" className="mt-12" style={{ 'maxWidth': 'max-content' }} />
                </div>
                <div className="flex items-center w-[40%] max-w-[180px] lg:max-w-[unset] lg:max-h-[300px] translate-y-3 ">
                    <img className="ml-auto w-full h-max lg:h-full lg:w-auto aspect-square rounded-sm" src="/img/restauranfood_20.webp" alt="foods" />
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

export default function Home({onLogout}: {onLogout: () => void}) {
    return (
        <>
            <ToastProvider>
                <SheetOpenProvider>
                    <Content onLogout={onLogout}/>
                </SheetOpenProvider>

                <Toast isOpen={true} message="We registered your reservation." />
            </ToastProvider>
        </>
    )
}