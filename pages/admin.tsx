import axios from "axios";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { useState } from "react";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import useSWR, { SWRResponse } from "swr";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Linebreak from "../components/Linebreak";
import NewsModal from "../components/NewsModal";
import PostItemCard from "../components/PostItemCard";
import PrimaryButton from "../components/PrimaryButton";
import UpSEO from "../components/UpSeo";
import { DatedObj, NewsletterObj, NewsObj } from "../utils/types";
import { fetcher } from "../utils/utils";

const admin = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [editNews, setEditNews] = useState<DatedObj<NewsObj>>(null);
    const [iter, setIter] = useState<number>(0);
    const {data: news, error: newsError}: SWRResponse<{ data: DatedObj<NewsObj>[] }, any> = useSWR(`/api/news?iter=${iter}`, fetcher);
    const {data: subscribers, error: subscribersError}: SWRResponse<{ data: DatedObj<NewsletterObj>[] }, any> = useSWR(`/api/newsletter?iter=${iter}`, fetcher);
    function onDelete(id: string) {
        axios.delete("/api/news", {data: {id: id}}).then(res => setIter(prevIter => prevIter+1)).catch(e => console.log(e));
    }

    return (
        <div className="max-w-5xl mx-auto px-4">
            <UpSEO />

            <div className="flex mb-12">
                <H1>Hi Laura!</H1>
                <PrimaryButton className="ml-auto" onClick={() => setIsOpen(true)}><FaPlus /><span className="ml-2">Add a newsletter</span></PrimaryButton>
            </div>
            {isOpen && <NewsModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                iter={iter}
                setIter={setIter}
                news={editNews}
                setNews={setEditNews}
            />}

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
            <div className="sm:flex flex-wrap gap-6">
                {(news && news.data) ? news.data.map(news => (
                    <div key={news._id}>
                        <ContextMenuTrigger id={news._id}>
                            <PostItemCard post={news} wide="fuller"/>
                        </ContextMenuTrigger>
                        
                        <ContextMenu id={news._id} className="bg-white rounded-md shadow-lg z-10 cursor-pointer">
                            <MenuItem onClick={() => {
                                setEditNews(news);
                                setIsOpen(true);
                            }} className="flex items-center hover:bg-gray-50 p-4">
                                <FiEdit2 /><span className="ml-2">Edit</span>
                            </MenuItem>
                            <MenuItem onClick={() => onDelete(news._id)} className="flex items-center hover:bg-gray-50 p-4">
                                <FiTrash /><span className="ml-2">Delete</span>
                            </MenuItem>
                        </ContextMenu>
                    </div>
                )) : <div className="w-full"><Skeleton height={200}/></div>}
            </div>
        </div>
    )
}

export default admin


export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session ||session.user.email !== "gaolauro@gmail.com") return {notFound: true};
    return {props: {}};
}