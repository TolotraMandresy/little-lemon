import './Authentification.css'

// export default function Authentification(props : {[k: string] : unknown}){
// export default function Authentification({children, ...props} : {children : React.ReactNode, [k: string] : unknown}){
export default function Authentification({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-lvh flex flex-col items-center md:justify-center gap-4">
            <div className="flex illustr-container w-full h-[30lvh] min-h-[150px] max-h-[240px] relative md:absolute md:max-h-full md:h-full">
                <img src="../../../public/img/illustration.jpg" className="flex absolute h-full w-full -z-10 object-cover md:z-0" alt="Little Lemon Illustration" />
                <div id="top-logo" className="rounded-md h-max px-4 py-2 backdrop-opacity-60 backdrop-blur-xs absolute top-[50%] left-[50%] -translate-[50%] md:hidden">
                    <img src="../../../public/icons_assets/Logo.svg" alt="logo" />
                </div>
            </div>

            <div className='flex flex-col gap-4 justify-between items-center h-full w-full max-w-[380px] md:overflow-auto px-4 z-10 md:bg-c-font-secondary md:rounded-md md:max-h-[95lvh] md:w-[55lvw] md:max-w-[500px] md:p-8' id='form-container'>
                <div className="rounded-md w-full h-max px-4 py-2 bg-c-font-secondary hidden md:flex md:sticky top-0">
                    <img src="../../../public/icons_assets/Logo.svg" className='m-auto' alt="logo" />
                </div>

                {children}
            </div>
        </div>
    );
}