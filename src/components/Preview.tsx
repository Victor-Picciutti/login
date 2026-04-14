import { SiFacebook, SiGithub, SiInstagram, SiTiktok } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { SocialMediaLink } from "./Header/SocialMediaLink";

// Definimos o que o componente precisa receber
interface PreviewProps {
  name: string;
  github: string;
  linkedin: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  links: { name: string; url: string }[];
}

export const Preview = ({ name, github, linkedin, instagram, tiktok, facebook, links }: PreviewProps) => {
  return (
    <aside className="w-4/12 p-4  ">
                    <div className="rounded border-8 p-4 max-w-lg mx-auto">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="block w-16 h-16 rounded-full bg-blue-200"></span>
                            <h1 className="font-bold">{name}</h1>
                        </div>

                        <ul className="flex gap-6 justify-center">
                            {github !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://github.com/" + github}>
                                        <SiGithub />
                                    </SocialMediaLink>
                                </li>
                            )}

                            {linkedin !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://linkedin.com/in/" + linkedin}>
                                        <SlSocialLinkedin />
                                    </SocialMediaLink>
                                </li>
                            )}

                            {instagram !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://instagram.com/" + instagram}>
                                        <SiInstagram />
                                    </SocialMediaLink>
                                </li>
                            )}

                            {tiktok !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://tiktok.com/" + tiktok}>
                                        <SiTiktok />
                                    </SocialMediaLink>
                                </li>
                            )}

                            {facebook !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://facebook.com/" + facebook}>
                                        <SiFacebook />
                                    </SocialMediaLink>
                                </li>
                            )}


                        </ul>
                        <div>
                            <ul className="flex flex-col items-center justify-center gap-6 w-3xs mt-8 ">
                                {links.map((item, index) => (
                                    item.name !== "" && (
                                        <li key={index} className="flex justify-center w-3xs">
                                            <SocialMediaLink link={item.url}>
                                                <div className="flex flex-col items-center border p-2 rounded w-3xs ">
                                                    <span className="font-bold">
                                                        {item.name}
                                                    </span>
                                                    <span className="text-xs">
                                                        {item.url}
                                                    </span>
                                                </div>
                                            </SocialMediaLink>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
  );
};