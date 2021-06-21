import {FaYoutube, FaTwitter} from "react-icons/fa"

export default function Footer() {
    const iconSize = 30;
    return (
        <>
            <div className="w-full btm-bg-gray-700 text-white px-4 py-16 mt-8 text-center leading-8" style={{backgroundImage: 'url("/bg-dim-50.png")'}}>
                <div className="mx-auto max-w-5xl">
                    <div className="flex gap-4 justify-center mb-6">
                        <a href="https://www.youtube.com/channel/UCstSEHcCLMGdac9wkbMeAIw" target="_blank" rel="noreferrer"><FaYoutube size={iconSize}/></a>
                        <a href="https://twitter.com/laurgao" target="_blank" rel="noreferrer"><FaTwitter size={iconSize}/></a>
                    </div>
                    <p>
                        Built with ♥ in Toronto by <a href="https://lauragao.ca" className="underline">Laura Gao</a>
                    </p>
                    <p>
                        The Chive © 2021.
                    </p>
                </div>

            </div>
        </>
    );
}