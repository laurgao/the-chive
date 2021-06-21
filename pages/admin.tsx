import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import NewsModal from "../components/NewsModal";
import { useState } from "react";
import useSWR, { SWRResponse } from "swr";
import { DatedObj, NewsObj } from "../utils/types";
import { fetcher } from "../utils/utils";
import PostItemCard from "../components/PostItemCard";
import Skeleton from "react-loading-skeleton";
import PrimaryButton from "../components/PrimaryButton";
import H2 from "../components/H2";
import Linebreak from "../components/Linebreak";

const admin = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [iter, setIter] = useState<number>(0);
    const {data: news, error: newsError}: SWRResponse<{ data: DatedObj<NewsObj>[] }, any> = useSWR(`/api/news?iter=${iter}`, fetcher);
    
    return (
        <div>
            <p>Hi Laura</p>
            <NewsModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                iter={iter}
                setIter={setIter}
            />

            <PrimaryButton onClick={() => setIsOpen(true)}>Add a newsletter</PrimaryButton>

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