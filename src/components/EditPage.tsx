import { useState } from "react"
import { Input } from "./Input"

export { Input } from "./Input"

interface Link{
    name: string,
    url: string
}

export const EditPage = () => {
    const [name, setName] = useState("");
    const [links, setlinks] = useState<Link[]>([]);

    const handleAddLink = () => {
        setlinks([...links, {name: "", url: ""}]);
    }

    const handleLinkChange = (index: number, field: string, value: string) => {
        const updatedLinks = [...links];

        updatedLinks[index] = {
            ...updatedLinks[index],
            [field]: value,
        };

        setlinks(updatedLinks);
    }


    return(
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 bg-blue-300 p-4">
                    <form className="space-y-4" onSubmit={(event) =>{event.preventDefault();}}>
                        <Input name="Nome" id="name" placeholder="Ex: João" value={name} onChange={(event) => {
                            setName(event.target.value);}}/>
                        <Input name="GitHub" id="github" placeholder="Ex: João-git" />

                        <div className="grid grid-cols-4 gap-4">
                        <Input name="Linkedin" id="linkedin" placeholder="Ex: João-git" />
                        <Input name="Instagram" id="instagram" placeholder="Ex: João-git" />
                        <Input name="TikTok" id="tiktok" placeholder="Ex: João-git" />
                        <Input name="Facebook" id="facebook" placeholder="Ex: João-git" />
                        </div>

                        <div className="space-y-4">
                            {
                                links.map((link, index) => {
                                    return(
                                        <div className="flex gap-4">
                                        <Input
                                            name={"Link" + index + 1}
                                            id={"Link" + index}
                                            value={link.name}
                                            placeholder="Ex: Portfólio"
                                            onChange={(event) => {
                                                handleLinkChange(index, "name", event.target.value);
                                            }}
                                        />

                                        <Input
                                            name={"URL do link"}
                                            id={"link-url" + index}
                                            value={link.url}
                                            placeholder="Ex: https://meusite.com"
                                            onChange={(event) => {
                                                handleLinkChange(index, "url", event.target.value)
                                            }}
                                        />
                                        </div>
                                    )
                                })
                            }

                            <button className="bg-white rounded cursor-pointer uppercase px-4 py-2 hover:opacity-80 transition-opacity" onClick={handleAddLink}>Adicionar Link</button>
                            
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