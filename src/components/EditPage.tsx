import { useState } from "react"
import { Input } from "./Input"
import { SocialMediaLink } from "./Header/SocialMediaLink"
import { SiFacebook, SiGithub, SiInstagram, SiTiktok } from "react-icons/si"
import { SlSocialLinkedin } from "react-icons/sl"
import { Preview } from "./Preview";
import { Main } from "./Main";

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
            return (
            <div className="container mx-auto flex py-8 gap-4">
                {/* Componente de Edição */}
                <Main
                    name={name} setName={setName}
                    github={github} setGithub={setGithub}
                    linkedin={linkedin} setLinkedin={setLinkedin}
                    instagram={instagram} setInstagram={setInstagram}
                    tiktok={tiktok} setTiktok={setTiktok}
                    facebook={facebook} setFacebook={setFacebook}
                    links={links}
                    handleLinkChange={handleLinkChange}
                    handleAddLink={handleAddLink}
                />

                <Preview
                    name={name}
                    github={github}
                    linkedin={linkedin}
                    instagram={instagram}
                    tiktok={tiktok}
                    facebook={facebook}
                    links={links}
                />
            </div>
        </div>
    )
}