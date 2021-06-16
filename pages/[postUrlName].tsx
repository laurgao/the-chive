import { useState } from "react";
import H1 from "../components/H1";
import { GetServerSideProps } from "next";
import Byline from "../components/Byline";
import Figure from "../components/Figure";
import InlineButton from "../components/InlineButton";
import { FaArrowLeft } from "react-icons/fa"
import useSWR, { SWRResponse } from "swr";
import { DatedObj, PostObj } from "../utils/types";
import readingTime from "reading-time";
import { fetcher } from "../utils/utils";
import { format } from "date-fns"
import Skeleton from "react-loading-skeleton";
import UpSEO from "../components/UpSeo";

export default function PublicPost(props: {
    postUrlName: string,
}) {
    const postUrlName = props.postUrlName;
    const [isNews, setIsNews] = useState<boolean>(postUrlName.split("-")[0] == "news");
    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?urlName=${postUrlName}`, fetcher);
    const thisPost = fakePost ? fakePost.data[0] : null

    return (
        <div className="max-w-2xl mx-auto px-4">
            {thisPost ? <UpSEO title={thisPost.title} description={thisPost.subtitle || ""}/>  : <UpSEO/> }
            <InlineButton href="/home" className="mb-6"><><FaArrowLeft />Back to Home</></InlineButton>
            {isNews && thisPost ? (
                <article>
                    {/* <pre>{thisPost.body}</pre> */}
                    <H1 className="mb-6">{thisPost.title}</H1>
                    <Byline author={thisPost.author} date={format (new Date(thisPost.date), 'MMM dd yyyy')} readingTime={readingTime(thisPost.body).text}/>
                    <p className="mb-3">VANCOUVER — After Tornado Snyders destroyed 12 lives and many homes yesterday, a response team consisting of paramedics, search and rescue, and dozens of grief counsellors were brought to the victims who lost loved ones and property, which led to criticism about the necessity of grief counselling to arise.</p>
                    <p className="mb-3">Amongst these victims are 65 year old Dennis Chuvern, who was described as “inconsolable” after seeing his property flattened. “I had lived here for 65 years,” he tells his grief counsellor, “Life is unfair, how could fate do this to me?”
                    </p>

                    <Figure 
                        imgUrl={thisPost.img && thisPost.img}
                        caption="A church 40 miles away from where Tornado Snyders struck saw some uprooted pianos and damange. “Tornado Snyders is a powerful one!” local authorities said."
                    />

                    <p>Not 2 hours passed before this received backlash. "One study on the efficacy of grief counselling examined parents whose children who had died of SIDS, and the parents who consciously tried to work though their loss in accordance to the principles of grief theory were experiencing more distress than the parents who did not, 3 weeks and even 18 months later," Philosopher William B. Irvine says. For this reason, Irvine is a proponent for people to work through grief on their own, through practices such as Stoic self-therapy.
</p>
                    <p>However, authorities are adamant on continuing with the process, citing political correctness as a driving factor. "It is widely believed in modern psychology that when one has mental health issues, they should see a therapist," says Andrea Hourren, who is leading the Toronado Snyders response team, "We cannot risk the backlash from leftists and politically correctness which the world should center around had we not taken this measure."</p>

                    <p>Others validate this claim. "My team and I have worked so hard to bring mental health as an acceptable topic to discuss publically," self-described leftist activist Lacey Giang says, "bringing grief counsellors to victims, whether it’s scientifically backed or not, iis going back on decades of social progress."</p>

                    <p>Regardless of which side you take, one thing for sure is that entering the mental health counselling field will only become a more profitable practice in upcoming years as the number of reported mental health crises continues to be on the rise.
</p>
                </article>
            ) : <>
                <Skeleton height={50} className="mb-6"/>
                <div className="-mb-2">
                    <Skeleton height={10} width={100}/> 
                </div>
                <Skeleton height={10} width={100} className="mb-6"/>
                <Skeleton count={20}/>
            </>}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const postUrlName: any = context.params.postUrlName;
    // const  {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = await useSWR(`/api/fakepost?urlName=${postUrlName}`, fetcher);


    return { props: {postUrlName: postUrlName} };
};
