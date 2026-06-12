export type BlogPost = {
  title: string;
  date: string;
  readTime: string;
  slug: string;
  description?: string;
  body: string[];
};

export const blogs: BlogPost[] = [
  {
    title: "Hunger, Loneliness and little personal updates",
    date: "June 10, 2026",
    readTime: "6 min read",
    slug: "hunger-loneliness-little-personal-updates",
    description:
      "Performative blog writing, but lately I've been thinking a lot about the interplay between ambition and solitude. This blog covers some personal reflections and updates on what I've been up to these days.",
    body: [
      "Hello and welcome to my first blog anon. I've always been meaning to write something for the longest time to express and convey my thoughts, partly as a way to document and reminiscing about these days somewhere in the near future and these blogs might act as a sort of time capsule? well idk. Welp! since this is my first attempt at writing a blog, chances that you might see many grammatical mistakes, awkward sentences, and moments where my thoughts don't flow as smoothly as I'd like them to are very high. And, writing has never been one of my strengths, but that's exactly why I wanted to start this blog thing. So if you see any of those, please bare with me and even point them out if you wanted to, I welcome any and all type of feedback!",
      "This blog could broadly be divided into three parts. The first focusing mostly on my experiences with becoming increasingly obsessed with work and the pursuit of growth. The second explores the loneliness that I personally face when dealing with these things. And, finally, I'll share a few personal reflections that have been on my mind recently.",

      "Over the past few months, I have found myself in a weird spot thinking a lot about ambition, self-improvement, loneliness, relationships, college dramas and within all these, trying to find a strange balance between chasing big goals or dreams that I wanted to pursue and still trying to simply living life or atleast the given moment. I will be honest, at one point I really feel intoxicated by the idea of this so-called 'Self-Improvement Journey' and together with that the constant numb feeling of 'missing out things during teen years'. While  i thought to myself, maybe I was the only one who have been feeling like this, but upon discussing with a few people belonging to the same age group as mine, both online and offline I discovered a strange pattern",
      "And interesting enough, I noticed it a lot common on the people belonging inside of my college environment. Most of the conversations around me during college seemed to revolve around gossips, relationships, or whatever drama happened that week, or heck, the way few people boast about how they got good marks on the questions which the faculty gave them before the night of the exam.",
      "While I am not saying that what I mentioned above are inherently wrong or bad, since to be fair, I vividly remember a time when I didn\'t even know how to push a single commit to my GitHub repos. In fact, until the end of my second year, I barely knew anything about GitHub, OSS contribution and development, even programming. So this isn\'t coming from a place of superiority. But still, slowly but surely I started to make much more improvements in this given year and I could confidently now say that I have a pretty good grasp on things now and I am happy about it.",
      "Now, what surprised me the most was not the technical growth that I have made but the people who I have interacted with in the past year",
      "The more I stepped outside my college environment, and started interacting with devs, researchers belonging through various Discord Servers and other niche Internet communities.. I noticed there were people out there who would spend thier entire nights debugging a problem nobody asked to solve. There were people who would disappear into a rabbit hole or whatever reddit/stack overflow threads for days just because they found a concept interesting and whatnot man. I feel fascinated and really inspired by these lotta people who are just so passionate about learning and building all these things. I have been really lucky to have met a lot of these people and I am grateful for that.",
      "The more I interacted with these people, I myself saw a change in me where I could genuinely see myself being more ambitious and started spending more time on learning new stuffs every week and try to implement it, even though most of it fails or reading documentation or any other relevant research papers for my project that am buidling like a mad autistic man with no life.",
      'What I want to convey is that, I felt like I finally found a direction that genuinely excited me and would stay for a long career defining period.',
      'But, there was a strange side effect that i also noticed. ',
      'The more I started to invest in these pursuits, the harder it became to relate with the people around me.',
      'While everyone out there excited about the next upcoming events in life, I just found myself in a ridiculous state of oscillating between FOMO and prioritizing my studies so that I could get a better job offer. I started to miss out the balancing between enjoyment and actual growth which eventually made me to feel envy about even the littlest things like people who simply enjoy the moment or hell even just the laughter of my classmates gave me an existential crisis. I still thought to myself that this was just a phase and I can do nothing but pull through this and eventually get used to it.',
      "Even before I realized it, I started changing in ways that I particularly didn't like... but I still kept ongoing just to prove a point ",
      "I became increasingly cynical and i found myself getting irritated by things that normally would never have bothered me. My personal life was an absolute mess, yet I kept convincing myself that 'This is what it takes to become the top 1% and this is the price ambitious people had to pay in order to achieve their goals.'",
      "Sounds ridiculous now, but at that time it felt completely rational.",
      "I slowly stopped interacting with my friends, ignored every messages, distanced myself from everyoone. I became emotionally unavailable not only to others but also to myself. And now that I look back at these things, I think I confused isolation with discipline.",
      "Somewhere during this period (around march month of 2026), I saw a random youtube comment stating a quote which has stuck with me ever since:",
    `> "People strive to be loved; if that fails, they want to be admired; if that fails, they want to be feared; if that fails, they want to be hated. For better to be hated than ignored."
      - Hjalmar Söderberg`,
      "As the days passes, I think there is some truth to this quote. A surprising amount of self improvement seems to be driven by a 'fear of irrelevance'.",
      "Personally what I think is that, we tell and gaslight ourselves that we are chasing excellence, but in reality sometimes we are just really trying to prove that we matter too and the need for to be seen by others.",
      "Now that I have personally experienced about all these things myself, I can see traces of that mindset in myself. For a long time, I believed that achivemet would solve every insecutiry of a man. And if i built enough things, learned enough skills, and become good enough at what field I am, the I would feel completely satisfied with myself. What I eventually realized was that, growth and validation are not the same thing.But it's more like something that comes along the growth, and it's not something that you directly chase. ",
      "Recently I saw a very good tweet by cneuralnets on twitter, which summarized my entire situation: ",
      "https://x.com/cneuralnetwork/status/2053430394666819970",
      "Now you might ask,  'What am I doing about all of this?'",
      "To be fair, I am still trying to figure it out myself and haven't found a concrete answer yet.",
      "I still see myself disappear somewhere for hours, still have moment where I feel guilty for not doing enough. I still find myself comparing my progress against expresent who are years ahead of me and wondering whether I am moving fact enough in this relentlessly advancing industry.",
      "But over the past few months I’ve been consciously trying to step back from treating my life like an optimization problem and rather just enjoy whatever I am doing at the moment and try to accept the fact that I am sill in the early stages of my journey and there's no need to rush things as such. Trying to accept the small mistakes that I make,  trying to be more compassionate to myself and others and still maintaining a balance between my professional and personal life. ",
      "I have been trying to spend more time with people around me intentionally as well, not because it is productive or is it because it's gonna help my career in any way. But simply because I want relationships that deserve to exist without constantly needing to justify themselves.",
      "I have also been trying to improve my relationship with my family as well, just starting random convos outta nowher, and what not.",
      "I have also been trying to become comfortable with slowing down things occassionally when things genuinely start to feel overwhelming, and just simply taking a break from everything.",
      "Eventually I realized that constantly sprinting through life only makes you forgot the purpose of why you even started running in the first place.",
      "What I would like to convey through this blog or from my own personal experiences is that, 'Do not ever sacrifice the people who actually matter to you as if they are some dead weight holding you back from climbing your mountain of greatness.... because the person you become on the way up is the person who arrives at the top so you better make sure that person isn't lonely.' ",
      "Have fun while you are at it, everything's will be alright. Cheers!"
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
