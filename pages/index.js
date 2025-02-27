import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Model from "../components/Model";
export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  useEffect(() => {
    const handleInput = () => {
      if (text === "whois") {
        router.push({
          pathname: "/about",
        });
      }
    };
    handleInput();
  }, [router, text]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Edafe Maxwell::Portfolio</title>
        <meta name="description" content="senior front-end engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <div className={styles.two_col}>
          <div className={styles.left_col}>
            <AnimatePresence>
              <motion.div
                className={styles.left_col_top}
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
                      delay: 0.4,
                      duration: 0.4,
                    },
                  },
                }}
              >
                <p>Hello! I am</p>
                <h1>Edafe Maxwell</h1>
                <h3>Senior Front-end Engineer</h3>
              </motion.div>
            </AnimatePresence>
            <div className={styles.left_col_bottom}>
              <div style={{ display: "flex", gap: "10px" }}>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      x: "-100px",
                      opacity: 0,
                    },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                        duration: 0.4,
                      },
                    },
                  }}
                  // eslint-disable-next-line react/jsx-no-comment-textnodes
                >
                  //
                </motion.p>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      x: "100px",
                      opacity: 0,
                    },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                        duration: 0.4,
                      },
                    },
                  }}
                >
                  {" "}
                  write the code below to continue:
                </motion.p>
              </div>
              <motion.div
                className={styles.input}
                whileHover={{
                  scale: [1, 1.4, 1.2],
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <p>&#x276F;</p>
                <input
                  type="text"
                  placeholder="whois"
                  onChange={(e) => setText(e.target.value)}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.right_col}>
            <Model />
          </div>
        </div>
      </div>
    </div>
  );
}
