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
                if (req.query.postName == "all" || req.query.urlName == "news-grief-counsellors-face-backlash-2021-06-10") {
                    thisPost.push({
                        date: new Date("June 10, 2021").toString(),
                        title: "Grief Counsellors Face Backlash After Tornado Snyders",
                        author: "Judy Sherman",
                        urlName: "news-grief-counsellors-face-backlash-2021-06-10",
                        body: `VANCOUVER — After Tornado Snyders destroyed 12 lives and many homes yesterday, a response team consisting of paramedics, search and rescue, and dozens of grief counsellors were brought to the victims who lost loved ones and property, which led to criticism about the necessity of grief counselling to arise. 
                        
                        Amongst these victims are 65 year old Dennis Chuvern, who was described as “inconsolable” after seeing his property flattened. “I had lived here for 65 years,” he tells his grief counsellor, “Life is unfair, how could fate do this to me?” Not 2 hours passed before this received backlash. "One study on the efficacy of grief counselling examined parents whose children who had died of SIDS, and the parents who consciously tried to work though their loss in accordance to the principles of grief theory were experiencing more distress than the parents who did not, 3 weeks and even 18 months later," Philosopher William B. Irvine says. For this reason, Irvine is a proponent for people to work through grief on their own, through practices such as Stoic self-therapy.
                
                        However, authorities are adamant on continuing with the process, citing political correctness as a driving factor. "It is widely believed in modern psychology that when one has mental health issues, they should see a therapist," says Andrea Hourren, who is leading the Toronado Snyders response team, "We cannot risk the backlash from leftists and politically correctness which the world should center around had we not taken this measure."
                        
                        Others validate this claim. "My team and I have worked so hard to bring mental health as an acceptable topic to discuss publically," self-described leftist activist Lacey Giang says, "bringing grief counsellors to victims, whether it’s scientifically backed or not, iis going back on decades of social progress."
                        
                        Regardless of which side you take, one thing for sure is that entering the mental health counselling field will only become a more profitable practice in upcoming years as the number of reported mental health crises continues to be on the rise.
                        
                        `,
                        img: "https://lh5.googleusercontent.com/TMqs4kJeVcaMG6IvEgUk5STYrHGH6I34m_dJkulVHQTyTsoc76dnzp0d85Fe0es2gh0eEjyRpCQ8QEc4ZHUOjcLoVSVY3b1Mn-UHcfZnHe41SgPLgWrYJcUEn7aVErcgkNTJUbfD",
                        type: "News"
                    })
                }
                if (req.query.postName == "all" || req.query.urlName == "news-sophomore-caught-plagiarizing-2021-06-11") {
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
                    
                        
                        Meanwhile, her teachers disagree. “By being an independent thinker, Judy is one of those kids who will mess up the education system by refusing to follow our rules,” Wang says.
                        
                        `,
                        img: "https://lh6.googleusercontent.com/gRM91swj6_YGzKSS8dgfNeYi1zHUWNYFbRfKUtW51AmoM60szomJo88h8LmnZOyfCRyr1vbGBuXtuaAjJdspxVybnb-SD_yGOIKxdPQUC0T1HaAlaPi1NjJk16i3bWPwrDmH0eqv",
                        type: "News"
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