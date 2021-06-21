import { format } from "date-fns"
import Byline from "../components/Byline"
import H1 from "../components/H1"

const worksCited = () => {
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

        </div>
    )
}

export default worksCited
