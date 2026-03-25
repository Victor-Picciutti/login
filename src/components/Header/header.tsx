import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header(){
    return(
        <header className="bg-[#774936]/80 backdrop-blur-md border-b border-[#ddb892]/30 py-4 text-[#fefae0] shadow-md justify-between items-center">
            <div className="container mr-auto flex justify-between items-center"> 
                <Logo/>

                <Menu />
            </div>
        </header>
    )
}

