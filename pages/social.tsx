import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import useSWR, { SWRResponse } from "swr";
import H1 from "../components/H1";
import H2 from "../components/H2";
import InlineButton from "../components/InlineButton";
import Linebreak from "../components/Linebreak";
import PostItemCard from "../components/PostItemCard";
import UpSEO from "../components/UpSeo";
import { DatedObj, PostObj } from "../utils/types";
import { fetcher } from "../utils/utils";

const news = () => {
    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?postName=social`, fetcher);
    const {data: featuredPosts, error: featuredPostsError}: SWRResponse<{ posts: DatedObj<PostObj>[], count: number }, any> = useSWR(`/api/post?userId=6042905542b21b000856ec87&featured=true`);
    const {data: posts, error: postsError}: SWRResponse<{ posts: DatedObj<PostObj>[], count: number }, any> = useSWR(`/api/post?projectId=60461bde97afb30008c38ad1`, fetcher);

    const socialFeaturedPosts:DatedObj<PostObj>[]  = featuredPosts ? featuredPosts.posts.filter(post => post.tags.includes("Social")) : [];
    console.log(featuredPosts)
    console.log(socialFeaturedPosts)
 
    return (
        <div className="max-w-5xl mx-auto px-4">
            <UpSEO title="Social" />
            <InlineButton href="/home" className="mb-6"><><FaArrowLeft />Back to Home</></InlineButton>
            <div className="text-center mb-8">
                <H1>Canada's Finest Critical Theory</H1>
                <p className="mt-4">"What is critical theory?" you may ask. If you don't know, don't waste one second fearing that you'll be the only one in your friend group stupid enough to not know this term, as we got you covered. Read <a href="" className="underline transition hover:theme">The Chive's guide to critical theory.</a></p>
            </div>
            <div className="md:flex flex-wrap gap-x-6 gap-y-10 ">
                {(fakePost && fakePost.data) ? fakePost.data.map((post, index) => (
                    <PostItemCard post={post} key={index} wide="half"/>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
            
            <Linebreak />
            <H2 className="text-center my-16">More articles about social sciences</H2>
            <div className="md:flex flex-wrap gap-x-6 gap-y-10 ">
                {(posts && posts.posts) ? posts.posts.map((post, index) => (
                    <>
                    <PostItemCard post={post} key={index}/>
                    {index == 2 && socialFeaturedPosts && socialFeaturedPosts.map(post => <PostItemCard post={post} key={post._id} wide="fuller"/>)}
                    </>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div>
    )
}

export default news
