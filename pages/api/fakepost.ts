import {NextApiRequest, NextApiResponse} from "next";
import { PostObj } from "../../utils/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {    
        case "GET": {
            
            if (!(req.query.urlName || req.query.postName)) {
                return res.status(406);                        
            }
            
            try {                
                let thisPost: PostObj[] = [];
                if (req.query.postName == "all" || req.query.postName == "news" || req.query.urlName == "news-grief-counsellors-face-backlash-2021-06-10") {
                    thisPost.push({
                        date: new Date("June 10, 2021").toString(),
                        title: "Grief Counsellors Face Backlash After Tornado Snyders",
                        author: "Judy Sherman",
                        urlName: "news-grief-counsellors-face-backlash-2021-06-10",
                        body: `VANCOUVER — After Tornado Snyders destroyed 12 lives and many homes yesterday, a response team consisting of paramedics, search and rescue, and dozens of grief counsellors were brought to the victims who lost loved ones and property, which led to criticism about the necessity of grief counselling to arise. 
                        
Amongst these victims are 65 year old Dennis Chuvern, who was described as “inconsolable” after seeing his property flattened. “I had lived here for 65 years,” he tells his grief counsellor, “Life is unfair, how could fate do this to me?” 
`,
                        body2: `Not 2 hours passed before this received backlash. "One study on the efficacy of grief counselling examined parents whose children who had died of SIDS, and the parents who consciously tried to work though their loss in accordance to the principles of grief theory were experiencing more distress than the parents who did not, 3 weeks and even 18 months later," Philosopher William B. Irvine says. For this reason, Irvine is a proponent for people to work through grief on their own, through practices such as Stoic self-therapy.

However, authorities are adamant on continuing with the process, citing political correctness as a driving factor. "It is widely believed in modern psychology that when one has mental health issues, they should see a therapist," says Andrea Hourren, who is leading the Toronado Snyders response team, "We cannot risk the backlash from leftists and politically correctness which the world should center around had we not taken this measure."

Others validate this claim. "My team and I have worked so hard to bring mental health as an acceptable topic to discuss publically," self-described leftist activist Lacey Giang says, "bringing grief counsellors to victims, whether it’s scientifically backed or not, iis going back on decades of social progress."

Regardless of which side you take, one thing for sure is that entering the mental health counselling field will only become a more profitable practice in upcoming years as the number of reported mental health crises continues to be on the rise.

                        `,
                        img: "https://lh5.googleusercontent.com/TMqs4kJeVcaMG6IvEgUk5STYrHGH6I34m_dJkulVHQTyTsoc76dnzp0d85Fe0es2gh0eEjyRpCQ8QEc4ZHUOjcLoVSVY3b1Mn-UHcfZnHe41SgPLgWrYJcUEn7aVErcgkNTJUbfD",
                        type: "News",
                        caption: "A church 40 miles away from where Tornado Snyders struck saw some uprooted pianos and damange. “Tornado Snyders is a powerful one!” local authorities said.",
                    })
                }
                if (req.query.postName == "all" || req.query.postName == "news" || req.query.urlName == "news-sophomore-caught-plagiarizing-2021-06-11") {
                    thisPost.push({
                        date: new Date("June 11, 2021").toString(),
                        title: "Sophomore Caught Plagiarizing Tells Reporters She 'Doesn’t Believe Plagiarism is Wrong'",
                        author: "Britney Woolf",
                        urlName: "news-sophomore-caught-plagiarizing-2021-06-11",
                        body: `EDMONTON — After being caught plagiarizing an English assignment, 16-year-old x high school sophomore Judy Sherman told reporters she doesn’t believe that plagiarism is wrong.

Her teacher, Mr. Wang, tells us that the assignment was meant for students to write their own news article, making up content and adding their own quotations. “By copying what other people said on the internet,” Wang tells us, “she is passing others' work as her own.”

Sherman, who copied quotations of her satirical news article from online sources instead of inventing her own quotes, says, “I was trying to mock leftists with my article. Doesn’t it make more sense to use what real life leftists said?”

Sherman’s principal tells reporters that she was caught cheating on a test as well earlier in the year. When questioned about this, Sherman goes on to cite The Lesson to Unlearn, where Y Combinator founder and multimillionaire Paul Graham wrote about how the most damaging thing learnt in school was learning to get good grades. “In school, I try to prioritize learning over my grades,” Sherman says, “I believe that being able to search for answers online in the 21st century information age than being able to memorize class material, and therefore, I think that using Google during a test is more valuable for my personal growth.”

Teens like Sherman are part of a larger trend of young people who have been silently revolting against institutional education. Instead of devoting herself to school like most people her age, Sherman prefers to spend her time on extracurricular activities such as math competitions, which she calls “more valuable for my personal growth.”
`,

                        body2: `Meanwhile, her teachers disagree. “By being an independent thinker, Judy is one of those kids who will mess up the education system by refusing to follow our rules,” Wang says.

                        `,
                        img: "https://lh6.googleusercontent.com/gRM91swj6_YGzKSS8dgfNeYi1zHUWNYFbRfKUtW51AmoM60szomJo88h8LmnZOyfCRyr1vbGBuXtuaAjJdspxVybnb-SD_yGOIKxdPQUC0T1HaAlaPi1NjJk16i3bWPwrDmH0eqv",
                        type: "News",
                        caption: "Judy Sherman and her team after earning first place in a state-wide math olympiad.",
                    })
                }
                if (req.query.postName == "all" || req.query.postName == "social" || req.query.urlName == "critical-theory-change-is-best-achieved-through-gradients-2021-06-16") {
                    thisPost.push({
                        date: new Date("June 16, 2021").toString(),
                        title: "Change is best achieved through gradients",
                        author: "Laura Gao",
                        subtitle: "I chased success and instead found fullfillment in failing. - Courtney Martin",
                        urlName: "critical-theory-change-is-best-achieved-through-gradients-2021-06-16",
                        body: `My generation grew up in school with messages about changing the world. We walk across the graduation with excitement over endless possibilities, each of us believing that we will be the one to change the world. At [TKS](http://tks.world/), an “olympic training ground for people to work on the world’s biggest problems,” we talk about impacting billions. We read the story of Elon Musk and get excited as heck to work hard. 

However, I think that the majority of impactful work that people do does not lie in uprooting the system, but rather, in the small daily tasks that make up the texture of our lives. This is especially demonstrated in *This isn't her mother's feminism* and *Confessions of a bad feminist*, two Ted Talks by feminists Courtney Martin and Roxane Gay respectively. 

As a feminist, you won't uproot the system. Courtney talks about a book she wrote about other activists - one of which gave up her job in social welfare to instead a film about the system. She had failed at her original goal, and yet, you don't find yourself judging her by this. Change is hard. Of course you failed, you don't expect anyone to successfully uproot a deeply entrentched system on their first try. And yet, their biggest impact was not achiveing the wildest ambition of "changing the world" but rather to take small steps, to humanize these issues and these systems. 

Roxane expresses similar sentiment in her Ted Talk. She considers herself a “bad feminist” (and wrote a book with that title) not because she failed to change the world, but because she’s upset with herself that she fails at the small daily things. For example, she listens to “thuggish rap” with lyrics that degrade women, but she still listens to these songs nevertheless because they’re *so awfully catchy*

Like most people in her generation, Courtney chased success, the idea of impacting billions and chasing the world. Yet, over time, she found more fulfillment in failing. Failing, and failing well - failing at the big things but continuously trying to live the day-to-day better.

> I chased success and instead found fullfillment in failing. 

This quote will stay with me for some time.

For Courtney, this is what activism looks like - improving her day-to-day work, writing blog posts about feminism, and just trying to help one person. This is what the title of her Ted Talk, “This isn’t her mother’s feminism,” means - that her mom was an activist by taking to the streets, giving talks, and trying to remove institutional barriers, whereas her activism lies in social media and blogging.

*We live in two worlds*, Courtney says, *one where we want to change the world and the other where we get our day to day self-esteem from making one person smile.* This also applies to how we look at success. I think that most ambitious teenagers of my breed (myself included) live in two contrasting worlds of success - one where we dream of being the next Elon Musk and scoff at a 9-5 job, the other where we are satisfied with ourselves working diligently for a few hours.

I used to struggle a lot with getting things done on a day-to-day basis. What I found has helped me the most with my recent successes, is when I focus on this moment, putting in the best work today. As my friend Samson describes, "relentlessly pursue what feels right in the moment, and continuously reassess." Impact Theory host Tom Bilyeu said, "I'd rather be sprinting 1000 miles in the wrong direction than not moving at all."

In the past few months, this is the strategy I adopted for my own productivity - going ham on the nearest, most appealing path, even if I don’t know that I’m not sprinting 1000 miles in the wrong direction. This strikes similarities with how machines learn by assessing their surroundings in the cost function vectorspace, then relentlessly going down the path of steepest descent. This process is known as “gradient descent.” AI doesn't know where it will end up, a dog-generating model doesn't know what a dog looks like when it starts training, but by relentlessly pursuing what feels right in the moment, the AI reaches an adequate minimum despite its uneventful start. For this reason, I like to call this approach "playing gradient descent with my life."

Of course, this model isn't perfect - if we take the analogy further, only exploiting in your pursuits gets you stuck in a local minimum. That's where the [value of exploration](https://notes.lauragao.ca/30-second-insights#exploration) comes in. However that's a different topic and I digress.

Relentlessly pursue and optimize for the small things when trying to find personal success. And do the same with activism. The world is not moved in big leaps but in slow, gradual changes that accumulate over time. Focusing on the second world on a day-to-day basis more often than thinking about the dream to change the world propels you closer towards reality, and by extension, helps you be more successful in your projects, feminism, and anything you do.

                        `,
                        type: "Life"
                    })
                }
                if (req.query.postName == "all" || req.query.postName == "social" || req.query.urlName=="critical-theory-from-bronx-to-cornell-2021-06-16") {
                    thisPost.push({
                        date: new Date("June 16, 2021").toString(),
                        title: `Analysis of "From Bronx to Cornell" by Richard Price`,
                        author: "Laura Gao",
                        urlName: "critical-theory-from-bronx-to-cornell-2021-06-16",
                        body: `"In my experience, people who reside within socio-economic shtetl-tags like "slum," "gheCo," "housing project," "inner-city" or even "blue collar" mainly don't think of themselves as living in that par9cular cubbyhole; they see themselves as living in the world, since most everybody they associate with also calls that corner of it home, and chronically cash-strapped people tend not to travel all that much."

                        Richard Price grew up in Parkside Houses, Bronx, with a somewhat pedestrian lifestyle. In his essay "From the Bronx to Cornell", a critique of class differences, backround information about his own upbringing sets the scene for the rest of the essay. In his own hometown, ideas of what class he belonged to didn't even enter his brain as everyone else he interacted with were in the same class as him.
                        
                        Panel 2
                        "In most cases people have to physically leave the village, turn around and look back to see where they came from before they can recognize not only its borders, both visible and invisible, but its very existence. For me, that started to come about in the fall of 1967, when I leL Parkside Houses in the Bronx for college, or as someone's grandmother once called it, "sleep away school." "
                        
                        Arriving at Cornell was a big change for Richard - as he says, "my world was instantaneously turned on its head". The new lifestyle and people he encountered brought visibility to the concpet of class that he was blind to back in his own home. It was only after leaving his hometown, stepping into a circle of people not like himself that he realy understand "that the world was, in fact, the WORLD." As he absorbs his new world, Richard realizes that the world of classes isn't black and white with clear segregation, that "it was not just a compound of two-dozen city-owned high-rises surrounded by asphalt-shingled or Formstone two-family houses."
                        
                        Panel 3
                        "One of the stranger effects of my fascina9on and hyperawareness of our differences was to semiconsciously cul9vate an exo9cness about myself, probably as an egosurvival countermeasure against what I perceived as the genuine exo9cness of everybody else."
                        
                        The more he sees, the more he realizes things he was blind to in the past that initially confused Robert, as he notes, "Rumpled, apparently, was a look, not a sin." Not just that - Cornell also brought an exoticness about the people he interacted with. In fact, the people he encounterd was so different from his past environment that as time went on, Richard grew a sense of "semiconsciously cul9vate an exo9cness about myself". He adopts a strong Bronxian accent that he didn't have beofre, and begins to make up stories about his dull upbringing, "some apocryphal, some with just a liCle narra9ve topspin to 9dy up the endings."
                        
                        Panel 4
                        "You went to Cornell, right?"
                        
                        "Yeah, I guess."
                        
                        ""That's amazing," he said, me trying not to grin. "Because my daughter? She goes to Bronx Community College, and she speaks beCer freakin' English than you."
                        
                        This stayed with him even after graduation. He wrote books about his own upbringing, going on book tours as an author. 10 years after first arriving at Cornell, in 1977, he encounters another Bronxian man, and has the depicted dialogue exchange with him. To Price, Bronx and Cornell depict two contradicting worlds that makes up who he is. He spent the previous 10 years escaping the "proletariat" and entering this higher class of Cornell. Yet, this conversation is symbolic of an encounter with his previous self and his old life, the other half of who he is and used to be. He relizes that his old life actualy wasn't so bad, that he came all the way here to try to achieve cornell and what was it all for? Also, with the reference to English is probably a reference to his Bronxian accent. That by leaving Bronx, he adopted a stronger Bronxian accent than the man's daughter who stayed. By leaving Bronx, he only developed a stronger rope that ties him to his hometown. One cannot get rid of your roots no matter how hard you try to escape.
                        
                        `,
                        img: "/Panel-the-first.png",
                        type: "Life"
                    })
                }
                if (req.query.postName == "all") {
                    thisPost.push({
                        date: new Date("February 22, 2021").toString(),
                        title: "The Dunning Kruger Effect of Popular Science",
                        author: "Laura Gao",
                        subtitle: "As long as it is catered towards entertainment, a YouTube video cannot explain quantum computing adequately for those who want to learn.                        ",
                        urlName: "https://notes.lauragao.ca/dunning-kruger.html",
                        body: ``,
                        img: "https://notes.lauragao.ca/img/dunning-kruger/tradeoff.png",
                        type: "Science"
                    })
                }
                if (req.query.postName == "all") {
                    thisPost.push({
                        date: new Date("September 21, 2020").toString(),
                        title: "Gödel’s First Incompleteness Theorem",
                        author: "Laura Gao",
                        subtitle: "There will always be math problems that cannot be answered.",
                        urlName: "https://laurgao.medium.com/g%C3%B6dels-first-incompleteness-theorem-d41516ccd37d",
                        body: ``,
                        img: "https://miro.medium.com/max/1225/1%2AgVSjx40-r2N89JW9_Mb3sQ.png",
                        type: "Science"
                    })
                }
                if (req.query.postName == "all") {
                    thisPost.push({
                        date: new Date("October 17, 2020").toString(),
                        title: "The Future of Healthcare is Preventative",
                        subtitle: "There’s a 50% chance you’ll die from a 100% preventable disease.",
                        author: "Laura Gao",
                        urlName: "https://laurgao.medium.com/the-future-of-healthcare-is-preventative-9920583cc681",
                        body: ``,
                        img: "https://miro.medium.com/max/3360/1*4dxW-LPfYt-G1z8HsslKrw.png",
                        type: "Science"
                    })
                }
                if (!thisPost || !thisPost.length) return res.status(404);
                
                return res.status(200).json({data: thisPost});
            } catch (e) {
                return res.status(500).json({message: e});                        
            }
        }
            
        
        
        default:
            return res.status(405);
    }
}