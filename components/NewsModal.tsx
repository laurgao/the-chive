import axios from "axios";
import { format } from "date-fns";
import React, { Dispatch, SetStateAction, useState } from "react";
import { DatedObj, NewsObj } from "../utils/types";
import H2 from "./H2";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import UpModal from "./UpModal";

const NewsModal = ({isOpen, setIsOpen, news, iter, setIter, setNews} : {
    isOpen: boolean,
    setIsOpen: any,
    news?: DatedObj<NewsObj>,
    iter: number,
    setIter: any,
    setNews?: Dispatch<SetStateAction<DatedObj<NewsObj>>>
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(news ? news.title : "");
    const [urlName, setUrlName] = useState<string>(news ? news.urlName : "");
    const [description, setDescription] = useState<string>(news ? news.description : "");
    const [img, setImg] = useState<string>(news ? news.img : "");
    const [month, setMonth] = useState<string>(news ? news.month : format(new Date(), "yyyy-MM-dd"));


    function customSetIsOpen(v: boolean) {
        if (!v) {
            setTitle("");
            setUrlName("");
            setDescription("");
            setImg("");
            setMonth(format(new Date(), "yyyy-MM-dd"))
            setNews(null);
            setIsOpen(false);
        }
    }

    function handleAddNews() {
        setIsLoading(true);

        axios.post("/api/news", {
            title: title,
            urlName: urlName,
            description: description,
            img: img,
            month: month,
            id: news && news._id
        }).then(res => {
            if (res.data.error) console.log(`Error: ${res.data.error}`);
            else {
                setIter(iter + 1);
                customSetIsOpen(false);
                // router.push(`/projects/${projectId}/${res.data.id[0]}`); // user page
                console.log(res.data);
            }
        }).catch(e => console.log(e)).finally(() => setIsLoading(false));
    }
    return (
        <UpModal isOpen={isOpen} setIsOpen={customSetIsOpen} wide={true}>
        <H2>{news ? "Edit newsletter" : "New newsletter"}</H2>
        <Input
            name="Name"
            type="text"
            placeholder="Samson Zhang"
            value={title}
            id="news-title-field"
            setValue={setTitle}
        />
        <Input
            name="month"
            type="date"
            placeholder="Samson Zhang"
            value={month}
            setValue={setMonth}
        />
        <p className="text-sm btm-gray-400">This does ask you to choose a date but the date will be ignored. Just the month and year matters.</p>
        <Input
            name="description"
            type="textarea"
            placeholder="Samson Zhang"
            value={description}
            setValue={setDescription}
        />
        <Input
            name="urlName"
            type="text"
            placeholder="Samson Zhang"
            value={urlName}
            setValue={setUrlName}
        />
        <Input
            name="Image URL"
            type="text"
            placeholder="Samson Zhang"
            value={img}
            setValue={setImg}
        />
        <PrimaryButton
            onClick={handleAddNews}
            isLoading={isLoading}
            isDisabled={!(title && img && urlName && description && month) || isLoading}
        >
            {news ? "Save" : "Create"}
        </PrimaryButton>
    </UpModal>
    )
}

export default NewsModal