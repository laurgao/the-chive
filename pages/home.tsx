import useSWR, { SWRResponse } from "swr";
import { DatedObj, PostObj } from "../utils/types";
import { fetcher } from "../utils/utils";
import PostItemCard from "../components/PostItemCard";
import Skeleton from "react-loading-skeleton";
import UpSEO from "../components/UpSeo";

const home = () => {
    const {data: posts, error: postsError}: SWRResponse<{ posts: DatedObj<PostObj>[], count: number }, any> = useSWR(`/api/post?userId=6042905542b21b000856ec87&page=${1}`, fetcher);
    console.log(posts)

    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?postName=all`, fetcher);

    return (
        <div className="max-w-5xl mx-auto px-4">
            <UpSEO />
            <div className="md:flex flex-wrap gap-6">
                {(fakePost && fakePost.data) ? fakePost.data.map((post, index) => (
                    <PostItemCard post={post} key={index} randomNumberZeroToTwo={index % 5}/>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
                
                {(posts && posts.posts) ? posts.posts.map(post => (
                    <PostItemCard post={post}/>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div>
    )
}

export default home
