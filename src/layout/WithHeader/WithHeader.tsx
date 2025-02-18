import Header from "../../components/Header/Header"
/**
 *  p-2 mobil
*/
export default function WithHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-lvh overflow-auto border-6">
            <Header className="sticky top-0"></Header>

            {/* <div className={`${className} z-0`}> */}
                {children}
            {/* </div> */}
        </div>
    )
}