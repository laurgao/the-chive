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
import showdown from "showdown";
import showdownHtmlEscape from "showdown-htmlescape";
import Parser from "html-react-parser";
import H2 from "../components/H2";
import PostItemCard from "../components/PostItemCard";
import PrimaryButton from "../components/PrimaryButton";
import Linebreak from "../components/Linebreak";

export default function PublicPost(props: {
    postUrlName: string,
}) {
    const postUrlName = props.postUrlName;
    const [type, setType] = useState<"news"|"social"|"home">(
        postUrlName.split("-")[0] == "critical" ? "social" : 
        postUrlName.split("-")[0] == "news" ? "news" : "home"
    );
    const {data: fakePost, error: fakePostError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?urlName=${postUrlName}`, fetcher);
    const {data: allPosts, error: allPostsError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?postName=all`, fetcher);
    const thisPost = fakePost ? fakePost.data[0] : null
    console.log(thisPost)

    const markdownConverter = new showdown.Converter({
        strikethrough: true,
        tasklists: true,
        tables: true,
        extensions: [showdownHtmlEscape],
    });

    return (
        <div className="max-w-2xl mx-auto px-4">
            {thisPost ? <UpSEO title={thisPost.title} description={thisPost.subtitle || ""} imgUrl={thisPost.img || ""}/>  : <UpSEO/> }
            <InlineButton 
                href={`/${type}`} className="mb-6"
            >
                <><FaArrowLeft />Back to {type}</>
            </InlineButton>
            {thisPost ? (
                <>
                <article>
                    <H1 className="mb-6">{thisPost.title}</H1>
                    <Byline author={thisPost.author} date={format (new Date(thisPost.date), 'MMM dd yyyy')} readingTime={readingTime(thisPost.body).text}/>
                    
                    {( type=="news"  ? (
                        <>
                        {/* <pre>{thisPost.body}</pre> */}
                        
                        <pre>{thisPost.body}</pre>

                        <Figure 
                            imgUrl={thisPost.img && thisPost.img}
                            caption={thisPost.caption}
                        />

                        <pre>{thisPost.body2}</pre>
                        </>
                    ) : type=="social" && postUrlName == "critical-theory-from-bronx-to-cornell-2021-06-16" ? (
                        <>
                        <Figure imgUrl="/Panel-the-first.png" alt="Panel 1"/>
                        <Quote>In my experience, people who reside within socio-economic shtetl-tags like "slum," "ghetto," "housing project," "inner-city" or even "blue collar" mainly don't think of themselves as living in that particular cubbyhole; they see themselves as living in the world, since most everybody they associate with also calls that corner of it home, and chronically cash-strapped people tend not to travel all that much.</Quote>
                        <p>Richard Price grew up in Parkside Houses, Bronx, with a somewhat dull lifestyle. In his essay "From the Bronx to Cornell," a critique of class differences, background information about his own upbringing sets the scene for the rest of the essay. In his own hometown, ideas of what class he belonged to didn't even enter his head as everyone else he interacted with were in the same class as him. This is what largely would go on to contribute to the “culture shock” that would ensue in the next panel.</p>


                        <Figure imgUrl="/Panel-the-second.png" alt="Panel 2" />
                        <Quote>In most cases people have to physically leave the village, turn around and look back to see where they came from before they can recognize not only its borders, both visible and invisible, but its very existence. For me, that started to come about in the fall of 1967, when I left Parkside Houses in the Bronx for college, or as someone's grandmother once called it, "sleep away school."</Quote>
                        <p>Arriving at Cornell was a big change for Price – as he says, "my world was instantaneously turned on its head." The new lifestyle and people he encountered brought visibility to the concept of class that he was blind to back in his own home. As he absorbs "that the world was, in fact, the WORLD," Price realizes that class separation “isn't black and white with clear segregation, that "it was not just a compound of two-dozen city-owned high-rises surrounded by asphalt-shingled or Formstone two-family houses." An initially confused Robert notes, "Rumpled, apparently, was a look, not a sin."</p>
                        
                        <Figure imgUrl="/Panel-the-third.png" alt="Panel 3" />
                        <Quote>One of the stranger effects of my fascination and hyperawareness of our differences was to semiconsciously cultivate an exoticness about myself, probably as an ego-survival countermeasure against what I perceived as the genuine exoticness of everybody else.</Quote>

                        <p>Such culture shock does more to your psychology than mere realizations. In fact, the people he encountered was so different from his past environment that as time went on, Price "semiconsciously cultivate[d] an exoticness about [him]self." In Bronx, where everyone has the same social roots as him, he never felt “exotic.” In Cornell, however, with everyone else appearing genuinely foreign and unique, Price wants himself to stand out too. He adopts a strong Bronxian accent that he didn't have before, and begins to make up stories about his upbringing, “some with just a little narrative topspin to tidy up the endings."</p>

                        <Figure imgUrl="/Panel-the-fourth.png" alt="Panel 4" />
                        <Quote>"You went to Cornell, right?" </Quote><Quote>"Yeah, I guess."</Quote>

                        <Quote>"That's amazing," he said, me trying not to grin. "Because my daughter? She goes to Bronx Community College, and she speaks beCer freakin' English than you."</Quote>
                        <p>After graduation, he continued with this. In fact, he took his narrative-spinning even further – he wrote books about his own upbringing, going on book tours as an author. On one such book tour in 1997, 10 years after first arriving at Cornell, he encounters another Bronxian man, and has the depicted dialogue exchange with him. To Price, Bronx and Cornell depict two contradicting worlds – one proletariat, the other bourgeoisie – that make up two halves of his class identity. This conversation is symbolic of an encounter with his old life. One can only guess at what this encounter means to him - maybe he realizes that his old class conditions actually wasn't so bad, that he came all the way to Cornell to live a higher-class life and what was it all for? Maybe the man’s reference to English is a reference to Price’s Bronxian accent - by leaving Bronx, he adopted a stronger Bronxian accent than the man's daughter who stayed. By leaving Bronx, he only developed a stronger rope that ties him to his hometown. One cannot get rid of his roots no matter how hard he tries to escape.</p>
                        </>
                    ): 
                            <div>{Parser(markdownConverter.makeHtml(thisPost.body))}</div>
                    )}
                </article>

                <Linebreak />
                <div>
                    {allPosts && allPosts.data && (
                        <>
                            <H2 className="mb-8 text-center">Related Posts</H2>
                            <div className="md:flex flex-col flex-wrap gap-x-6 gap-y-10 items-start justify-items-start">
                                {allPosts.data.slice(0, 4).filter(post => post.urlName != postUrlName).map((post, index) => (
                                    <PostItemCard post={post} key={post.urlName} randomNumberZeroToTwo={index % 2}/>
                                ))}
                            </div>
                        </>
                    )}
                    <div className="mt-16 w-full text-center">
                        <p className="mb-8">If you enjoyed this article, your enjoyment is attributed to the giants I stood on. Check them out:</p>
                        <PrimaryButton className="mx-auto" href="/works-cited">Works Cited</PrimaryButton>
                    </div>
                </div>
                </>

            ): <>
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
