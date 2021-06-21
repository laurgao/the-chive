import React, { useState } from "react";
import axios from 'axios';
import H2 from './H2';
import UpModal from './UpModal';
import PrimaryButton from './PrimaryButton';
import { DatedObj, NewsObj } from '../utils/types';
import Input from './Input';

const NewsModal = ({isOpen, setIsOpen, news, iter, setIter} : {
    isOpen: boolean,
    setIsOpen: any,
    news?: DatedObj<NewsObj>,
    iter: number,
    setIter: any,
}) => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(news ? news.title : "");
    const [urlName, setUrlName] = useState<string>(news ? news.urlName : "");
    const [description, setDescription] = useState<string>(news ? news.description : "");
    const [img, setImg] = useState<string>(news ? news.img : "");
    const [month, setMonth] = useState<string>(news ? news.month : "");

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
            if (res.data.error) {
                setIsLoading(false);
                console.log(`Error: ${res.data.error}`);
            } else {
                setIsLoading(false);
                setIter(iter + 1);
                setIsOpen(false);
                // router.push(`/projects/${projectId}/${res.data.id[0]}`); // user page
                console.log(res.data);
            }
        }).catch(e => {
            setIsLoading(false);
            console.log(e);
        });
    }
    return (
        <UpModal isOpen={isOpen} setIsOpen={setIsOpen} wide={true}>
        <H2>{news ? "Edit User" : "New User"}</H2>
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
            type="text"
            placeholder="Samson Zhang"
            value={month}
            setValue={setMonth}
        />
        <Input
            name="description"
            type="text"
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
            name="img"
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