import { useState } from "react"
import { Input } from "./Input"
import { SocialMediaLink } from "./Header/SocialMediaLink"
import { SiFacebook, SiGithub, SiInstagram, SiTiktok } from "react-icons/si"
import { SlSocialLinkedin } from "react-icons/sl"
import { Preview } from "./Preview";
import { Main } from "./Main";

export { Input } from "./Input"



export const EditPage = () => {
    return (
        <div>
            <div className="container mx-auto flex py-8 gap-4">
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