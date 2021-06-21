import useSWR, { SWRResponse } from "swr";
import { DatedObj, PostObj } from "../utils/types";
import { fetcher } from "../utils/utils";
import PostItemCard from "../components/PostItemCard";
import Skeleton from "react-loading-skeleton";
import UpSEO from "../components/UpSeo";
import { useState } from "react";
import axios from "axios";
import PrimaryButton from "../components/PrimaryButton";
import H1 from "../components/H1";
import InlineButton from "../components/InlineButton";

const home = () => {
    const [iter, setIter] = useState<number>(0);
    const {data: posts, error: postsError}: SWRResponse<{ posts: DatedObj<PostObj>[], count: number }, any> = useSWR(`/api/post?userId=6042905542b21b000856ec87&page=${1}`, fetcher);
    const {data: featuredPosts, error: featuredPostsError}: SWRResponse<{ posts: DatedObj<PostObj>[], count: number }, any> = useSWR(`/api/post?userId=6042905542b21b000856ec87&featured=true`);
    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?postName=all`, fetcher);
    // iter = Math.floor(posts.count/10) + 1

    const [error, setError] = useState<any>(null);
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [submitted, setSubmitted] = useState<{message: string, id: string, email: string}>(null);
    function onWaitlistSubmit() {
        if (!(email.includes(".") && email.includes("@"))) {
            setInvalidEmail(true);
            return
        } else setInvalidEmail(false)
        axios.post("/api/newsletter", {
            email: email,
        }).then(res => {
            setSubmitted(res.data);
        }).catch(e => {
            console.log(e);
            setError(e);
        });
    }

    const containerClasses = "px-4 mx-auto max-w-5xl py-8";
    return (
        <>
        <UpSEO />
        <div className="w-full" id="waitlist">
            <div className="my-16 text-white sm:text-center relative px-4 mx-auto z-10"> 
                <H1 className="text-4xl sm:text-5xl">
                    The Chive
                </H1>
                <p className="max-w-3xl mx-auto sm:text-xl my-8">Canada's finest daily dose of writing.</p>
                
            </div>
            <div className="w-full bg-primary absolute left-0" style={{transform: "skew(0deg, -5deg)", height: "100vh", top: "calc(-100vh + 50%)"}}/> {/*   z-0 */}
               
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10"> {/*  */}
            <div className="md:flex flex-wrap gap-6 items-start justify-items-start">
                {(fakePost && fakePost.data) ? (
                    <>
                    <PostItemCard post={fakePost.data[1]} wide="full"/>
                    <PostItemCard post={fakePost.data[0]}/>
                    <PostItemCard post={fakePost.data[2]}/>
                    <PostItemCard post={fakePost.data[3]} wide="full"/>
                    {fakePost.data.slice(4, fakePost.data.length).map((post, index) => (
                    <PostItemCard post={post} key={index} randomNumberZeroToTwo={(index + 2) % 5}/>
                ))}</>
                ) : <div className="w-full"><Skeleton height={200} className="opacity-50"/></div>}
            </div>
        </div>
        <div className="w-full bg-primary my-16 text-white" id="newsletter">
            <div className={containerClasses}>
                <div className="md:flex items-center">
                    <h2 className="flex-shrink-0 mr-8 mb-4 md:mb-0"><b>Like what you see?</b><br/>Sign up for my monthly email list.</h2>
                    {submitted ? (
                        <div className="ml-auto">
                            <p>
                                You have successfully subscribed {submitted.email}. Thank you for signing up 😁<br/>
                                Check out past issues <a href="/news#newsletter">here</a>.
                            </p>
                        </div>
                    ) : (
                        <div className="ml-auto ">
                        <div className="flex">
                            <input
                                type="text"
                                className="p-2 rounded-md text-black"
                                placeholder="Enter your email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <PrimaryButton className="ml-2" onClick={onWaitlistSubmit}>Sign up</PrimaryButton>
                        </div>
                        
                        {error && <div className="mt-2">An unexpected error occured. <a className="underline" href="mailto:gaolauro@gmail.com">Contact Laura</a> or please try again later.</div>}
                        {invalidEmail && <div className="mt-2">Please enter a valid email.</div>}
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="max-w-5xl mx-auto px-4">
            <div className="md:flex flex-wrap gap-6 items-start justify-items-start">
                {(featuredPosts && featuredPosts.posts) ? featuredPosts.posts.map((post, index) => (
                    <PostItemCard post={post} key={post._id}/>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div>
        {iter == 1 ? <div className="max-w-5xl mx-auto px-4">
            <div className="md:flex flex-wrap gap-6 items-start justify-items-start">
                {(posts && posts.posts) ? posts.posts.map((post, index) => (
                    <PostItemCard post={post} key={post._id} randomNumberZeroToTwo={(index) % 5}/>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div> : <div className="w-full flex justify-center"><InlineButton onClick={() => setIter(iter+1)} className="my-16 text-xl mx-auto">View more</InlineButton></div>}
        </>
    )
}

export default home
