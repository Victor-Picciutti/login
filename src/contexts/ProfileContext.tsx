import { Children, createContext, useContext, useState } from "react";
import type { Link } from "../Interfaces/Link";


interface ProfileContextType{
    name: string
    github: string
    linkedin: string
    tiktok: string
    instagram: string
    facebook: string
    links: Link[];
    setName: (name: string) => void;
    setGithub: (github: string) => void;
    setLinkedin: (Linkedin: string) => void;
    setTiktok: (tiktok: string) => void;
    setInstagram: (instagram: string) => void;
    setFacebook: (facebook: string) => void;
    handleAddLink : () => void;
    handleLinkChange: (index: number, field: string, value: string) => void;
}


interface ProfileProviderProps {
    children: React.ReactNode;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({children}: ProfileProviderProps) => {
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

            return(
                <ProfileContext.Provider value={{
                    name, 
                    github, 
                    linkedin, 
                    instagram, 
                    tiktok, 
                    facebook, 
                    links, 
                    setName, 
                    setGithub, 
                    setLinkedin, 
                    setInstagram, 
                    setTiktok, 
                    setFacebook, 
                    handleAddLink, 
                    handleLinkChange, 
                }}>
                    {children}
                </ProfileContext.Provider>
            )
        };
    };

export const useProfile = () => {
    return useContext(ProfileContext);
}