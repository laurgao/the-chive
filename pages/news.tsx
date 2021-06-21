import { FaArrowLeft } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import useSWR, { SWRResponse } from "swr";
import H1 from "../components/H1";
import InlineButton from "../components/InlineButton";
import PostItemCard from "../components/PostItemCard";
import UpSEO from "../components/UpSeo";
import { DatedObj, PostObj } from "../utils/types";
import { fetcher } from "../utils/utils";

const news = () => {
    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?postName=news`, fetcher);

    return (
        <div className="max-w-5xl mx-auto px-4">
            <UpSEO title="News" />
            <InlineButton href="/home" className="mb-6"><><FaArrowLeft />Back to Home</></InlineButton>
            <div className="text-center mb-8">
                <H1>Canada's Finest News</H1>
                <p className="mt-4">The Onion may be America's finest news source, but The Chive is definitely Canada's.</p>
            </div>

            <div className="md:flex flex-wrap gap-6">
                {(fakePost && fakePost.data) ? fakePost.data.map((post, index) => (
                    <PostItemCard post={post} key={index} wide="half"/>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div>
    )
}

export default news
