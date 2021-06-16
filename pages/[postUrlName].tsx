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
import Quote from "../components/Quote";

export default function PublicPost(props: {
    postUrlName: string,
}) {
    const postUrlName = props.postUrlName;
    const [isNews, setIsNews] = useState<boolean>(postUrlName.split("-")[0] == "news");
    const [isCriticalTheory, setIsCriticalTheory] = useState<boolean>(postUrlName.split("-")[0] == "critical");
    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?urlName=${postUrlName}`, fetcher);
    const thisPost = fakePost ? fakePost.data[0] : null
    console.log(thisPost)
    return (
        <div className="max-w-2xl mx-auto px-4">
            {thisPost ? <UpSEO title={thisPost.title} description={thisPost.subtitle || ""}/>  : <UpSEO/> }
            <InlineButton href="/home" className="mb-6"><><FaArrowLeft />Back to Home</></InlineButton>
            {thisPost ? ( isNews  ? (
                <article>
                    {/* <pre>{thisPost.body}</pre> */}
                    <H1 className="mb-6">{thisPost.title}</H1>
                    <Byline author={thisPost.author} date={format (new Date(thisPost.date), 'MMM dd yyyy')} readingTime={readingTime(thisPost.body + thisPost.body2).text}/>
                    <pre>{thisPost.body}</pre>

                    <Figure 
                        imgUrl={thisPost.img && thisPost.img}
                        caption={thisPost.caption}
                    />

                    <pre>{thisPost.body2}</pre>
                </article>
            ) : isCriticalTheory && postUrlName == "critical-theory-from-bronx-to-cornell-2021-06-16" ? 
                <article>
                    <H1 className="mb-6">{thisPost.title}</H1>
                    <Byline author={thisPost.author} date={format (new Date(thisPost.date), 'MMM dd yyyy')} readingTime={readingTime(thisPost.body).text}/>
                    <pre>{thisPost.body}</pre>
                    <Figure imgUrl="/Panel-the-first.png" alt="Panel 1"/>
                    <Quote>"In my experience, people who reside within socio-economic shtetl-tags like "slum,"
"gheCo," "housing project," "inner-city" or even "blue collar" mainly don't think of
themselves as living in that par9cular cubbyhole; they see themselves as living in the
world, since most everybody they associate with also calls that corner of it home, and
chronically cash-strapped people tend not to travel all that much."</Quote>
                    <p>Richard Price grew up in Parkside Houses, Bronx, with a somewhat pedestrian lifestyle. In his essay "From the Bronx to Cornell", a critique of class differences, backround information about his own upbringing sets the scene for the rest of the essay. In his own hometown, ideas of what class he belonged to didn't even enter his brain as everyone else he interacted with were in the same class as him. </p>


                    <Figure imgUrl="/Panel-the-second.png" alt="Panel 2" />
                    <Quote>"In most cases people have to physically leave the village, turn around and look back to
see where they came from before they can recognize not only its borders, both visible
and invisible, but its very existence. For me, that started to come about in the fall of
1967, when I leL Parkside Houses in the Bronx for college, or as someone's
grandmother once called it, "sleep away school." "</Quote>
                    <p>Arriving at Cornell was a big change for Richard - as he says, "my world was instantaneously turned on its head". The new lifestyle and people he encountered brought visibility to the concpet of class that he was blind to back in his own home.  It was only after leaving his hometown, stepping into a circle of people not like himself that he realy understand "that the world was, in fact, the WORLD." As he absorbs his new world, Richard realizes that the world of classes isn't black and white with clear segregation, that "it was not just a compound of two-dozen city-owned high-rises surrounded by asphalt-shingled or Formstone two-family houses."</p>
                    
                    <Figure imgUrl="/Panel-the-third.png" alt="Panel 3" />
                    <Quote>"One of the stranger effects of my fascina9on and hyperawareness of our differences was to semiconsciously cul9vate an exo9cness about myself, probably as an egosurvival countermeasure against what I perceived as the genuine exo9cness of everybody else."</Quote>

                    <p>The more he sees, the more he realizes things he was blind to in the past that initially confused Robert, as he notes, "Rumpled, apparently, was a look, not a sin." Not just that - Cornell also brought an exoticness about the people he interacted with. In fact, the people he encounterd was so different from his past environment that as time went on, Richard grew a sense of "semiconsciously cul9vate an exo9cness about myself". He adopts a strong Bronxian accent that he didn't have beofre, and begins to make up stories about his dull upbringing, "some apocryphal, some with just a liCle narra9ve topspin to 9dy up the endings."  </p>

                    <Figure imgUrl="/Panel-the-fourth.png" alt="Panel 4" />
                    <Quote>"You went to Cornell, right?" </Quote><Quote>"Yeah, I guess."</Quote>

<Quote>""That's amazing," he said, me trying not to grin. "Because my daughter? She goes to Bronx Community College, and she speaks beCer freakin' English than you."</Quote>
                    <p>This stayed with him even after graduation. He wrote books about his own upbringing, going on book tours as an author. 10 years after first arriving at Cornell, in 1977, he encounters another Bronxian man, and has the depicted dialogue exchange with him. To Price, Bronx and Cornell depict two contradicting worlds that makes up who he is. He spent the previous 10 years escaping the "proletariat" and entering this higher class of Cornell. Yet, this conversation is symbolic of an encounter with his previous self and his old life, the other half of who he is and used to be. He relizes that his old life actualy wasn't so bad, that he came all the way here to try to achieve cornell and what was it all for? Also, with the reference to English is probably a reference to his Bronxian accent. That by leaving Bronx, he adopted a stronger Bronxian accent than the man's daughter who stayed. By leaving Bronx, he only developed a stronger rope that ties him to his hometown. One cannot get rid of your roots no matter how hard you try to escape.</p>

                </article>
            : 
                <article>
                    <H1 className="mb-6">{thisPost.title}</H1>
                    <Byline author={thisPost.author} date={format (new Date(thisPost.date), 'MMM dd yyyy')} readingTime={readingTime(thisPost.body).text}/>
                    <pre>{thisPost.body}</pre>
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
