import { format } from "date-fns"
import useSWR, { SWRResponse } from "swr";
import Byline from "../components/Byline"
import H1 from "../components/H1"
import H2 from "../components/H2";
import Linebreak from "../components/Linebreak";
import PostItemCard from "../components/PostItemCard";
import { DatedObj, PostObj } from "../utils/types";
import { fetcher } from "../utils/utils";

const worksCited = () => {
    const {data: allPosts, error: allPostsError}: SWRResponse<{ data: DatedObj<PostObj>[] }, any> = useSWR(`/api/fakepost?postName=all`, fetcher);

    return (
        <div className="max-w-2xl mx-auto px-4">
            <article>
            <H1 className="mb-6">Works Cited</H1>
                        <Byline author={"Laura Gao"} date={format (new Date("June 21 2021"), 'MMM dd yyyy')} readingTime={"1 min read"}/>
                        
            <p>Gay, Roxane. “Confessions of a bad feminist.” TED, TED Talks, 2010, https://www.ted.com/talks/roxane_gay_confessions_of_a_bad_feminist?language=en.
<br/><br/>
    Martin, Courtney E. “This Isn't Her Mother's Feminism.” TED, TED Talks, 2010, www.ted.com/talks/courtney_e_martin_this_isn_t_her_mother_s_feminism?language=en.
    <br/><br/>
    Price, Richard. “From the Bronx to Cornell.” The New York Times, The New York Times, 12 June 2005, www.nytimes.com/2005/06/12/national/class/from-the-bronx-to-cornell.html.
    <br/><br/>
    “Synex Medical.” Synex Medical, https://synexmedical.com/assets/images/magneticfield.png. Accessed 21 June 21, 2021
    </p>
            </article>

            <Linebreak />
                {allPosts && allPosts.data && (
                    <>
                        <H2 className="mb-8 text-center">Related Posts</H2>
                        <div className="md:flex flex-col flex-wrap gap-6 items-start justify-items-start">
                            {allPosts.data.slice(0, 4).map((post, index) => (
                                <PostItemCard post={post} key={post.urlName} randomNumberZeroToTwo={index % 2}/>
                            ))}
                        </div>
                    </>
                )}

        </div>
    )
}

export default worksCited
