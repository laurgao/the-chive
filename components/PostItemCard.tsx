import { format } from "date-fns";
import ellipsize from "ellipsize";
import Link from "next/link";
import React, { useState } from "react";
import readingTime from "reading-time";
import { DatedObj } from "../utils/types";
import H2 from "./H2";

export default function PostItemCard({post, randomNumberZeroToTwo = 2, wide = null}: {post: DatedObj<any> /*Newsobj or PostObj*/, randomNumberZeroToTwo?: number, wide?: "full"|"half"|"fuller"|null}) {
    // const randomNumberZeroToThree = useState<number>(Math.floor(Math.random() * 4));
    const [orientation, setOrientation] = useState<"flex-row"|"flex-row-reverse"|"flex-col">(
        (wide == "full" || wide == "fuller" || wide == "half") ? "flex-col" :
        randomNumberZeroToTwo == 0 ? "flex-row" : 
        randomNumberZeroToTwo == 1 ? "flex-row-reverse" : "flex-col"
    );
    const [isPostulate, setIsPostulate] = useState<boolean>(post.urlName.substr(0, 3) == "202" );
    const [img, setImg] = useState<string>(
        post.img ? post.img : 
        (isPostulate && post.slateBody.filter(p => (p.type == "img"))[0]) ? post.slateBody.filter(p => (p.type == "img"))[0].url : 
        (isPostulate && post.slateBody.filter(chunk => (
            chunk.children[0].type == "img"
        ))[0]) ? post.slateBody.filter(chunk => (
            chunk.children[0].type == "img"
        ))[0].children[0].url :
        ""
    );
    const isNews = post.month ? true : false

    return (
        <div className={`w-full md:${wide == "fuller" ? "w-full" : wide == "full" ? "max-w-60" : wide == "half" ? "max-w-40" : orientation == "flex-col" ? `${/*md:*/"ch-w-30"}` : "flex-grow"} border border-transparent hover:border-gray-200 rounded-lg p-4 transition`}>
            <Link href={post.urlName.substr(0, 5) == "https"  ? post.urlName : isPostulate ? `https://postulate.us/@laura/p/${post.urlName}` : `/${post.urlName}`}>
                <a >
                    <div className={`flex flex-col md:${orientation} w-full h-full`} style={{borderTopColor: "#006b3a", borderLeftColor: "transparent", borderBottomColor: "transparent", borderRightColor: "transparent", borderWidth: "5px"}} >
                        {img && <div >
                            <img src={img} className={`${orientation == "flex-col" ? "w-full" : "w-full md:w-96" /* md:max-w-xs */} `}/>
                        </div>}
                        <div className={`text-sm mt-4 ${img && orientation == "flex-row" ? "ml-10" : orientation == "flex-row-reverse" ? "mr-10" : "mt-6 "}`}>
                        <p className="font-bold text-sm uppercase btm-gray-400">{isNews ? format(new Date(post.month), "MMM yyyy") : isPostulate ? post.projectArr[0].name: post.type ? post.type : "Post"}</p>
                        
                            <H2 className="font-medium my-2 content">{ellipsize(post.title, 200)}</H2>

                            {(isNews || post.body) &&
                                <p className="btm-gray-400 mb-4">{ellipsize(
                                    // loop through array of slateBodys and loop through each child within each slatebody.
                                    isPostulate ? (post && post.slateBody) && post.slateBody.filter(chunk => chunk.type == "p").map(
                                        chunk => chunk.children.map(
                                        c => c.type == "a" ? c.children[0].text : c.text
                                    ).join(" ")).join(" ") :

                                    isNews ? post.description : 
                                    post.body
                                , 200)}</p>  // wide == "fuller" ? 400 : 
                            }
                            
                            {!isNews && 
                                <>
                                <p className="btm-gray-500">
                                    {format(new Date(post.createdAt || post.date), "MMM dd yyyy")}
                                </p>
                                <p className="btm-gray-400">{readingTime(post.body + post.body2 || post.body).text}</p>
                                </>
                            }
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}