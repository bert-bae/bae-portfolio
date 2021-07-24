import { ProjectBlockProps } from "../components/project-block";

export const projectData: ProjectBlockProps[] = [
  {
    title: "Webhook-Demo",
    description:
      "Simple implementation of a webhook server with a mock server. The webhook service is able to create an owner and register URLs. Each owner is given a secret that is used to decrypt the webhook payload that the webhook server emits to its registered listeners. Using lerna, the packages share the client which understands the encryption and decryption method for the mock server to be able to install and use.",
    techStack: ["Typescript", "Lerna"],
    projectUrl: "https://github.com/bert-bae/bae-webhooks",
  },
  {
    title: "Notion Clone",
    description:
      "Notion is a smart editor which is able to accept block commands to construct a document. These commands can create HTML content-editable blocks. The project was created while exploring the key-event binding for a document editor similar.",
    projectUrl: "https://github.com/bert-bae/notion-clone",
    techStack: ["React", "Typescript"],
  },
  {
    title: "Flooding",
    description:
      "Climate change is a real threat and as a developer, I wanted to create something that can share the impacts of rising water levels on our coastal cities. Using MapboxGL, custom layers, and React, this quick client-side project provides users a visual layout of the effects of rising water levels. Explore the map and see what areas are at risk of flooding based on 10 meter incremental rises in our ocean water levels.",
    techStack: ["React", "TypeScript", "MapboxGL"],
    demoUrl: "https://flooding.bertcode.com/",
    projectUrl: "https://github.com/bert-bae/flooding",
  },
  {
    title: "Scraper",
    description:
      "Web scraper demo which extracts data into a JSON format that is specified in a YAML configuration file. The instructions will target specific elements in the DOM tree, specifically scraping data in the order specified. The output is a clean, easy to use JSON file. This short project can be deployed quickly with lambdas which can be triggered with a chron job with specific YAML configurations that can repeatedly scrape data from a site.",
    techStack: ["Typescript", "Cheerio"],
    projectUrl: "https://github.com/bert-bae/scraper",
  },
  {
    title: "Starwars-Scroll",
    description:
      "Starwars scroll mimmicks the popular StarWars film's introductions. The simple UI and backend is created using React, DynamoDB, and Lambdas. The site is deployed on S3 with the serverside being deployed using AWS SAM which uses Cloudformation. Create and edit your own story and if you want to share it, create a shareable link that you can send to your friends. The links are stored temporarily for 7 days allowing you to send messages to friends in a fun way.",
    techStack: [
      "NodeJs",
      "React",
      "DynamoDB",
      "Serverless",
      "S3",
      "Cloudfront",
    ],
    demoUrl: "https://star-crawl.bertcode.com/",
    projectUrl: "https://github.com/bert-bae/starwars-scroll",
  },
  {
    title: "NuBrew",
    description:
      "NuBrew is an application that allows users to vote on their craft beer drinks and keep track of favorited drinks over time. As users expand their set of craft beers tried over time, the application will provide recommendations based on their previous likes based on IBU and category/style of drink. Of course, users need to be able to take that plunge and explore uncharted territories by trying something new by random as well, even if they really don't like that one style, taste changes over time!\n\nWe want to make it as easy as possible, so for those that bought their drinks with labels, the application was created while experimenting machine learning and label recognition using Google AutoML Vision.\n\nIn collaboration with Adam Romeo (https://adamromeo.dev/)",
    projectUrl: "https://github.com/bert-bae/nubrew",
    techStack: [
      "React-Native",
      "PostgreSql",
      "Knex",
      "NodeJS",
      "Express",
      "SaSS",
      "Google AutoML",
    ],
  },
];
