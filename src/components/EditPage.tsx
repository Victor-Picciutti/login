import { useState } from "react"
import { Input } from "./Input"

export { Input } from "./Input"

export const EditPage = () => {
    const [name, setName] = useState("Zezinho, Barros");

    return(
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 bg-blue-300 p-4">
                    <form className="space-y-4">
                        <Input name="Nome" id="name" placeholder="Ex: João" value={name} onChange={(event) => {
                            setName(event.target.value);}}/>
                        <Input name="GitHub" id="github" placeholder="Ex: João-git" />

                        <div className="grid grid-cols-4 gap-4">
                        <Input name="Linkedin" id="linkedin" placeholder="Ex: João-git" />
                        <Input name="Instagram" id="instagram" placeholder="Ex: João-git" />
                        <Input name="TikTok" id="tiktok" placeholder="Ex: João-git" />
                        <Input name="Facebook" id="facebook" placeholder="Ex: João-git" />
                        </div>
                    </form>
                </main>

                <aside className="w-4/12 bg-red-300 ">
                    Seu Nome: {name}
                </aside>
            </div>
        </div>
    )
}