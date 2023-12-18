/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/Project.module.css";
import { motion } from "framer-motion";


const Project = ({ pinnedItems }) => {

  const projects = [
    
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
