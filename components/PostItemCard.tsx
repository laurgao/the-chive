import {DatedObj, PostObj} from "../utils/types";
import ellipsize from "ellipsize";
import readingTime from "reading-time";
import {format} from "date-fns";
import React, { useState } from "react";
import Link from "next/link";
import H2 from "./H2";



export default function PostItemCard({post, randomNumberZeroToTwo = 2, wide = null}: {post: DatedObj<PostObj>, randomNumberZeroToTwo?: number, wide?: "full"|"half"|"fuller"|null}) {
    // const randomNumberZeroToThree = useState<number>(Math.floor(Math.random() * 4));
    const [orientation, setOrientation] = useState<"flex-row"|"flex-row-reverse"|"flex-col">(
        wide ? "flex-col" :
        randomNumberZeroToTwo == 0 ? "flex-row" : 
        randomNumberZeroToTwo == 1 ? "flex-row-reverse" : "flex-col"
    );
    const [isPostulate, setIsPostulate] = useState<boolean>(post.urlName.substr(0, 3) == "202" );
    const [img, setImg] = useState<string>(
        post.img ? post.img : 
        (isPostulate && post.slateBody.filter(p => (p.type == "img"))[0]) ? post.slateBody.filter(p => (p.type == "img"))[0].url : 
        (isPostulate && post.body.includes("![](https://")) ? "" :
        ""
    );

    return (
        <div className={`${wide == "fuller" ? "w-full" : wide == "full" ? "max-w-60" : wide == "half" ? "max-w-40" : orientation == "flex-col" ? `${/*md:*/"ch-w-30"}` : "flex-grow"} border border-transparent hover:border-gray-200 rounded-lg p-4 transition`}>
            <Link href={post.urlName.substr(0, 5) == "https"  ? post.urlName : isPostulate ? `https://postulate.us/@laura/p/${post.urlName}` : `/${post.urlName}`}>
                <a >
                    <div className={`flex ${orientation} w-full h-full`} style={{borderTopColor: "#006b3a", borderLeftColor: "transparent", borderBottomColor: "transparent", borderRightColor: "transparent", borderWidth: "5px"}} >
                        {img && <div >
                            <img src={img} className={`${orientation == "flex-col" ? "w-full" : "md:max-w-xs"} ${randomNumberZeroToTwo == 0 ? "mr-10" : randomNumberZeroToTwo == 1 ? "ml-10" : "mb-6 "}`}/>
                        </div>}
                        <div className="text-sm mt-6">
                        <p className="font-bold text-sm uppercase btm-gray-400">{isPostulate ? post.projectArr[0].name: post.type ? post.type : "Post"}</p>
                        
                            <H2 className="font-medium my-2 content">{ellipsize(post.title, 200)}</H2>
                                
                            <p className="btm-gray-400">{readingTime(post.body + post.body2 || post.body).text}</p>
                            <p className="btm-gray-500">
                                {format(new Date(post.createdAt || post.date), "MMM dd yyyy")}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}