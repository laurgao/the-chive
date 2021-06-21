import { FaArrowLeft } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import useSWR, { SWRResponse } from "swr";
import H1 from "../components/H1";
import H2 from "../components/H2";
import InlineButton from "../components/InlineButton";
import Linebreak from "../components/Linebreak";
import PostItemCard from "../components/PostItemCard";
import UpSEO from "../components/UpSeo";
import { DatedObj, NewsObj, PostObj } from "../utils/types";
import { fetcher } from "../utils/utils";

const news = () => {
    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?postName=news`, fetcher);
    const {data: news, error: newsError}: SWRResponse<{ data: DatedObj<NewsObj>[] }, any> = useSWR("/api/news", fetcher);
    console.log(news)
    console.log(newsError)

    return (
        <div className="max-w-5xl mx-auto px-4">
            <UpSEO title="News" />
            <InlineButton href="/home" className="mb-6"><><FaArrowLeft />Back to Home</></InlineButton>
            <div className="text-center mb-8">
                <H1>Canada's Finest News</H1>
                <p className="mt-4">The Onion may be America's finest news source, but The Chive is definitely Canada's.</p>
            </div>

            <div className="md:flex flex-wrap gap-x-6 gap-y-10">
                {(fakePost && fakePost.data) ? fakePost.data.map((post, index) => (
                    <PostItemCard post={post} key={index} wide="half"/>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>

            <Linebreak />
            
            <div className="text-center my-16" id="newsletter">
                <p className="btm-gray-500 mb-2">Now, here's some</p>
                <H1 className="text-center">News in Laura's life</H1>
                <p className="mt-4 text-xl">Which is sent every month to an email list of 200+ subscribers... that <a className="underline transition theme-hover" href="/home#newsletter">you can join!</a></p>
            </div>
            <div className="md:flex flex-wrap gap-x-6 gap-y-10 ">
                {(news && news.data) ? news.data.map((news, index) => (
                    <>
                    <PostItemCard post={news} key={index}/>
                    </>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div>
    )
}

export default news
