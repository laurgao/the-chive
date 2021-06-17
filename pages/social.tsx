import Skeleton from "react-loading-skeleton";
import useSWR, { SWRResponse } from "swr";
import H1 from "../components/H1";
import PostItemCard from "../components/PostItemCard";
import UpSEO from "../components/UpSeo";
import { DatedObj, PostObj } from "../utils/types";
import { fetcher } from "../utils/utils";

const news = () => {
    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?postName=social`, fetcher);

    return (
        <div className="max-w-5xl mx-auto px-4">
            <UpSEO title="Social" />
            <H1>Social</H1>
            <p>The Onion may be America's finest news source, but The Chive is Canada's.</p>
            <div className="md:flex flex-wrap gap-6">
                {(fakePost && fakePost.data) ? fakePost.data.map((post, index) => (
                    <PostItemCard post={post} key={index} randomNumberZeroToTwo={index % 5}/>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div>
    )
}

export default news
