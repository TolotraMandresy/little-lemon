import './Authentification.css'

// export default function Authentification(props : {[k: string] : unknown}){
// export default function Authentification({children, ...props} : {children : React.ReactNode, [k: string] : unknown}){
export default function Authentification({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-lvh flex flex-col items-center gap-4">
            <div className="flex illustr-container w-full h-[30vh] max-h-[240px] relative">
                <img src="../../../public/img/illustration.jpg" className="flex h-full w-full -z-10 object-cover" alt="Little Lemon Illustration" />
                <div id="top-logo" className="rounded-md px-4 py-2 backdrop-opacity-60 backdrop-blur-xs absolute top-[50%] left-[50%] -translate-[50%]">
                    <img src="../../../public/icons_assets/Logo.svg" alt="logo"/>
                </div>
            </div>

            <div className='h-full w-full max-w-[380px] justify-between px-4'>
                {children}
            </div>
        </div>
    );
}