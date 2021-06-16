import { BiCaretUp } from "react-icons/bi"

const Figure = ({imgUrl, caption, alt} : {imgUrl: string, caption?: string, alt?: string}) => {
    return (
        <figure className="my-8">
            <img src={imgUrl} alt={alt || ""}/>
            {caption && <div className="flex flex-row btm-gray-500 text-sm mt-4">
                <BiCaretUp /><figcaption className="ml-2">{caption}</figcaption>
            </div>}
        </figure>
    )
}

export default Figure
