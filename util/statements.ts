//Note these are mocked data from a database to make most component reusable and dynamic on prod
type ListStyle = {
  id:number
  name:string
  live:boolean
}[]
export const ListStyleFromDataBase:ListStyle = [
  {id:0,name:'Creon Pass', live:false},
  {id:1,name:'Token', live:true},
  {id:2,name:'AI Revenue', live:true},
  {id:3,name:'AI Launchpad', live:true}
]


interface Statements{
  missionStatement:string
  creonStatement:string
  creonTitle:string
  missionSubStatement:string
  missionSubStatementI:string
  missionSubStatementII:string
  missionSubStatementIII:string
  missionSubStatementIv:string
}
export const writeUpsFromDb
: Statements ={
  missionStatement:"our mission is to provide unique, confidential AI-based tools, to which you will gain ",
  missionSubStatement:"lifetime access through NFT tokens and our CREON token.",
  missionSubStatementI:"Access to confidential AI tools enabling business optimization and development. Only NFT holders will have the ability to use a given tool.",
  missionSubStatementII:"Prospect to derive financial benefits through the redistributed profit generated from AI tools, but only when the majority of NFT holders decide to release the tool publicly.",
  missionSubStatementIII:"The possibility of allocating investments into new, exceptional tokenized AI tools through Creon Launchpad.",
  missionSubStatementIv:"Early access to allocations in inspiring tokenized projects, real businesses based on AI.",
  creonStatement:"The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools",
  creonTitle:"creon pass nft"
}
export const listItems:string[] = [
  "Pre-launch investment opportunities for upcoming AI projects ",
  "Free and early access to Creon built AI projects",
  "Higher allocation limits on the Creon AI Launchpad",
  "Revenue share distribution from Creon built AI projects"
]

type Title = "Profit" | "Engagement" | "Limitless" | "Transparent"
type TitleLogo = Record<Title, boolean>

export const accordionStatements:{id:number,title:string, summary:string,logoTitle:Title}[] = [
  {
    id:1,
    title:"Profitability and Growth",
    logoTitle:"Profit",
    summary:" At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    id:2,
    title: "Transparent & Fair Decentralized Earnings",
    logoTitle:"Transparent",
    summary:" At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    id:3,
    title:"Early Engagement in Tokenized AI Projects",
    logoTitle:"Engagement",
    summary:"    At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    id:4,
    title:"Limitless Possibilities of AI & Crypto",
    logoTitle:"Limitless",
    summary:" At Creon, we handpick cutting-edge Al prinjects and offer our community and token holders early access and investment opportunities. Our community"
  }
]

export const ProfitThroughStatement:{title:string, summary:string} ={
  title:"The dynamic community driven business model of the future.",
  summary:("At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.")
}

 export const VerticalCardInformation:{id:number,title:string,summary:string,writeup:string,imageSource:string,comingSoon:boolean}[] = [
  {
    id:1,
    comingSoon:true,
    title:"token",
    imageSource:"Token.png",
    summary:"The Gateway token to the world of AI",
    writeup:"Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive"
  },
  {
    id:2,
    comingSoon:true,
    title: "revenue",
    imageSource: "Revenue.png",
    summary:"Driving income and growth through ",
    writeup:"CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
  },
  {
    id:3,
    comingSoon:true,
    title:"launchpad",
    imageSource:"launchpad.png",
    summary:"Driving the future of AI Innovation",
    writeup:"The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON."
  }

]
 export const HorizontalCardInformation:{id:number,title:string,writeup:string,imageSource:string,comingSoon:boolean}[] = [
  
  {
    id:1,
    comingSoon:false,
    title:"AI Prospects, Market Size, and Development Pace",
    imageSource:"AI.png",
    writeup:"The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation."
  },
  {
    id:2,
    comingSoon:false,
    title: "AI Tools and Market",
    imageSource: "robotic.png",
    writeup:"AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others."
  },
  {
    id:3,
    comingSoon:false,
    title:"AI, Crypto, and NFT Market",
    imageSource:"nftmarket.png",
    writeup:"Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities."
  }

]

export const BannerTitleFromDb = {
  TitleForLargeScreen:"The world's first platform for Tokenizing AI blockchain projects",
  TitleForMediumScreen:"Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.",
  paragraphForLargeScreen:"Hold the Creon Pass NFT and earn passive income from AI Tools",
  paragraphForMediumScreen:"Creon «Create On» confidential AI Tools for granting access through NFTs."
}