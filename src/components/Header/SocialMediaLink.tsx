import type React from "react";

interface SocialMediaLinkProps {
    link: string;
    children: React.ReactNode;
}


export const SocialMediaLink = ({link, children}:SocialMediaLinkProps) => {
    return(<a className="w-full bg-gray-100 flex items-center justify-center rounded hover:bg-[#d4a373]"
    href={link}>{children}</a>)
    
}