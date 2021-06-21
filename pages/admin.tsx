import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import NewsModal from "../components/NewsModal";
import { useState } from "react";
import useSWR, { SWRResponse } from "swr";
import { DatedObj, NewsletterObj, NewsObj } from "../utils/types";
import { fetcher } from "../utils/utils";
import PostItemCard from "../components/PostItemCard";
import Skeleton from "react-loading-skeleton";
import PrimaryButton from "../components/PrimaryButton";
import H2 from "../components/H2";
import Linebreak from "../components/Linebreak";
import UpSEO from "../components/UpSeo";
import { FaPlus } from "react-icons/fa";
import H1 from "../components/H1";

const admin = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [iter, setIter] = useState<number>(0);
    const {data: news, error: newsError}: SWRResponse<{ data: DatedObj<NewsObj>[] }, any> = useSWR(`/api/news?iter=${iter}`, fetcher);
    const {data: subscribers, error: subscribersError}: SWRResponse<{ data: DatedObj<NewsletterObj>[] }, any> = useSWR(`/api/newsletter?iter=${iter}`, fetcher);

    return (
        <div className="max-w-5xl mx-auto px-4">
            <UpSEO />

            <div className="flex">
                <H1>Hi Laura!</H1>
                <PrimaryButton className="ml-auto" onClick={() => setIsOpen(true)}><FaPlus /><span className="ml-2">Add a newsletter</span></PrimaryButton>
            </div>
            <NewsModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                iter={iter}
                setIter={setIter}
            />


            <Linebreak />
            <H2>Your subscribers:</H2>
            <div>
                {(subscribers && subscribers.data) ?
                    subscribers.data.map(sub => <p key={sub._id}>{sub.email}</p>)
                : 
                    <Skeleton />
                }
            </div>

            <Linebreak />
            <H2>Your newsletters:</H2>
            <div className="md:flex flex-wrap gap-6">
                {(news && news.data) ? news.data.map((news, index) => (
                    <>
                    <PostItemCard post={news} key={index}/>
                    </>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div>
    )
}

export default admin


export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    if (session.user.email !== "gaolauro@gmail.com") return {notFound: true};
    return {props: {}};
}