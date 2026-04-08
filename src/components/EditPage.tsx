import { useState } from "react"
import { Input } from "./Input"
import { SocialMediaLink } from "./Header/SocialMediaLink"
import { SiFacebook, SiGithub, SiInstagram, SiTiktok } from "react-icons/si"
import { SlSocialLinkedin } from "react-icons/sl"

export { Input } from "./Input"

interface Link {
    name: string,
    url: string
}

export const EditPage = () => {
    const [name, setName] = useState("");
    const [links, setlinks] = useState<Link[]>([]);

    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [instagram, setInstagram] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [facebook, setFacebook] = useState("");


    const handleAddLink = () => {
        setlinks([...links, { name: "", url: "" }]);
    }

    const handleLinkChange = (index: number, field: string, value: string) => {
        const updatedLinks = [...links];

        updatedLinks[index] = {
            ...updatedLinks[index],
            [field]: value,
        };

        setlinks(updatedLinks);
    }


    return (
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 p-4">
                    <form className="space-y-4" onSubmit={(event) => { event.preventDefault(); }}>

                        <Input name="Nome" id="name" placeholder="Ex: João" value={name} onChange={(event) => {
                            setName(event.target.value);
                        }} />

                        <Input name="GitHub" id="github" placeholder="Ex: João-git" value={github} onChange={(event) => {
                            setGithub(event.target.value);
                        }} />

                        <div className="grid grid-cols-4 gap-4">
                            <Input name="Linkedin" id="linkedin" placeholder="Ex: João-git" value={linkedin} onChange={(event) => {
                                setLinkedin(event.target.value);
                            }} />

                            <Input name="Instagram" id="instagram" placeholder="Ex: João-git" value={instagram} onChange={(event) => {
                                setInstagram(event.target.value);
                            }} />

                            <Input name="TikTok" id="tiktok" placeholder="Ex: João-git" value={tiktok} onChange={(event) => {
                                setTiktok(event.target.value);
                            }} />

                            <Input name="Facebook" id="facebook" placeholder="Ex: João-git" value={facebook} onChange={(event) => {
                                setFacebook(event.target.value);
                            }} />
                        </div>

                        <div className="space-y-4">
                            {
                                links.map((link, index) => {
                                    return (
                                        <div className="flex gap-4">
                                            <Input
                                                name={"Link" + (index + 1)}
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

                <aside className="w-4/12 p-4  ">
                    <div className="rounded border-8 p-4 max-w-lg mx-auto">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="block w-16 h-16 rounded-full bg-blue-200"></span>
                            <h1 className="font-bold">{name}</h1>
                        </div>

                        <ul className="flex gap-2 justify-center">
                            {github !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://github.com/" + github}>
                                        <SiGithub />
                                    </SocialMediaLink>
                                </li>
                            )}

                            {linkedin !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://linkedin.com/in" + linkedin}>
                                        <SlSocialLinkedin/>
                                    </SocialMediaLink>
                                </li>
                            )}

                            {instagram !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://instagram.com/" + instagram}>
                                        <SiInstagram/>
                                    </SocialMediaLink>
                                </li>
                            )}

                            {tiktok !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://tiktok.com/" + tiktok}>
                                        <SiTiktok/>
                                    </SocialMediaLink>
                                </li>
                            )}

                            {facebook !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://facebook.com/" + facebook}>
                                        <SiFacebook/>
                                    </SocialMediaLink>
                                </li>
                            )}

                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    )
}