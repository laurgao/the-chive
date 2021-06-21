import {FaYoutube, FaTwitter} from "react-icons/fa"

export default function Footer() {
    const iconSize = 30;
    return (
        <>
            <div className="w-full btm-bg-gray-700 text-white px-4 py-16 mt-20 text-center leading-10" style={{backgroundImage: 'url("/bg-dim-50.png")'}}>
                <div className="mx-auto max-w-5xl">
                    <div className="flex gap-10 justify-center mb-10">
                        <a className="transition theme-hover" href="https://www.youtube.com/channel/UCstSEHcCLMGdac9wkbMeAIw" target="_blank" rel="noreferrer"><FaYoutube size={iconSize}/></a>
                        <a className="transition theme-hover" href="https://twitter.com/laurgao" target="_blank" rel="noreferrer"><FaTwitter size={iconSize}/></a>
                    </div>
                    <p>
                        Built with ♥ in Toronto by <a href="https://lauragao.ca" target="_blank" rel="noreferrer" className="underline transition theme-hover">Laura Gao</a>
                    </p>
                    <p>
                        <a className="underline transition theme-hover" href="https://github.com/laurgao/the-chive" target="_blank" rel="noreferrer">Source code</a> on Github
                    </p>
                    <p>
                        The Chive © 2021.
                    </p>
                </div>

            </div>
        </>
    );
}