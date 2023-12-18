/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/Project.module.css";
import { motion } from "framer-motion";


const Project = ({ pinnedItems }) => {

  const projects = [
     {
    name: 'My Event Pod',
    stargazerCount: '100',
    description: 'The smart digital event planner for event pros, venues, vendors, and organizers to collaborate and plan any successful event all in one place.',
    url: 'https://www.myeventpod.com/',
    status: 'Live',
    stack:'React-Redux-Tailwind-NextJS-React hooks-Rest-charts-Formik'
    },
     {
    name: 'Presmit',
    stargazerCount: '100',
    description: 'Best Digital Trading Platform In Africa',
    url: 'https://prestmit.com/',
    status: 'Live',
    stack:'React-Redux-Tailwind-PWA-Chatbot-Webpack-NextJs-Crypto-React hooks-RestAPI-Formik-CSS'
    },
     {
    name: 'Profitall',
    stargazerCount: '100',
    description: 'A digital commerce platform for a profitable business',
    url: 'https://www.profitall.co.uk/',
    status: 'Live',
    stack:'React-Redux-Tailwind-Chatbot--Webpack-Cloudinary-React hooks-Rest-charts-Formik-SCSS'
    },
    {
    name: 'Mintyn',
    stargazerCount: '100',
    description: 'MINTYN MOBILE AND ONLINE BANKING',
    url: 'https://mintyn.com/',
    status: 'Live',
    stack:'React-Redux-Bootstrap-React hooks-Rest-charts-Formik-SCSS'
    },
   {
    name: 'Kusnap',
    stargazerCount: '100',
    description: 'A marketplace for sellers and buyers',
    url: 'https://kusnap.com/',
    status: 'Live',
    stack:'Nextjs-React-Redux-Bootstrap-Cloudinary-React hooks-Rest-charts'
    },
     {
    name: 'Syncbit',
    stargazerCount: '100',
    description: 'A timesheet management application used in the Oil & Gas industry for streamlining payroll',
    url: 'https://syncbit.io/',
    status: 'Live',
    stack:'Nextjs-React-Tailwind-Redux-Mui-React hooks-Rest-typeScript'
    },
     {
    name: 'BitMARte',
    stargazerCount: '100',
    description: 'A complete commerce platform that will allow merchants to start, grow, and manage a business.',
    url: 'https://www.bitmarte.com/',
    status: 'Live',
    stack:'Nextjs-React-Tailwind-Redux-Mui-Cloudinary-React hooks-Rest-typeScript-AWS'
    },
    {
    name: 'Crusifix Games',
    stargazerCount: '100',
    description: 'The Crucifix Games application is a minimal and responsive web application created to host contests with an intuitive leadership board & point ranking system. Customers can also book and pay for games',
    url: 'https://crusifix.vercel.app/',
    status: 'Live',
    stack:'Nextjs-React-Tailwind-Redux-React hooks-Rest-typeScript'
    },
     {
    name: 'Muxt',
    stargazerCount: '100',
    description: 'A digital ad space with tools that drive your business',
    url: 'https://muxt.net',
    status: 'Ongoing',
     stack:'Nextjs-React-Tailwind-Redux-Formik-Jest-Rechart-Firebase-React hooks'
    },
     {
    name: '5chub',
    stargazerCount: '100',
    description: 'A facility management web application that provides users the ability to request for artisans and related facility management services',
    url: 'https://www.5chub.com/',
    status: 'Live',
     stack:'PHP-MYSQL-Bootstrap-Laravel'
    },
        {
    name: '5cee',
    stargazerCount: '100',
    description: 'A facility management web application that provides users the ability to request for artisans and related facility management services',
    url: 'https://www.5cee.com/careers',
    status: 'Live',
     stack:'React-Redux-Mui'
  }
  ]
  return (
    <div className={style.project}>
      <div className={style.project_container}>
        <p>//Top project</p>
        <div className={style.project_card_container}>
          {projects.map((item) => {
            return (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.2,
                    },
                  },
                }}
                className={style.project_card}
                whileHover={{
                  transition: {
                    duration: 0.2,
                  },
                  filter: [
                    "hue-rotate(0)",
                    "hue-rotate(360deg)",
                    "hue-rotate(45deg)",
                    "hue-rotate(0)",
                  ],
                }}
                key={item.id}
              >
                <div className={style.project_card_top}>
                  <div className={style.project_card_head}>
                    <div>
                      <p>{item.name}</p>
                    </div>
                    <div>
                      <span>⭐{item.status}</span>
                    </div>
                  </div>
                  <div className={style.project_card_body}>
                    <p>{item.description}</p>
                  </div>
                  <div style={{ paddingTop: '5px' }}> { item.stack}</div>
                </div>
                <div className={style.project_card_bottom}>
                  <div>
                    <a href={item.url} rel="noreferrer" target="_blank">
                      Check demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};



export default Project;
