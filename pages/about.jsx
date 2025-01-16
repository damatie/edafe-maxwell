/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/About.module.css";
import { BsFolderFill, BsMarkdownFill } from "react-icons/bs";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const About = () => {
  const [showFrontend, setShowFrontend] = useState(true);
  const [showBackend, setShowBackend] = useState(false);
  const [showStyling, setShowStyling] = useState(false);
  const [showTesting, setShowTesting] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const [showAdditionalTech, setShowAdditionalTech] = useState(false);
  const [showMethodologies, setShowMethodologies] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className={style.about}>
      <div className={style.skill_menu} onClick={(e) => setShowMenu(!showMenu)}>
        {" "}
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={style.left}>
        <motion.div
          className={style.left_number}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <span className={style.text_fade_01}>20</span>
          <span className={style.text_fade_01}>21</span>
          <span className={style.text_fade_01}>22</span>
          <span className={style.text_fade_01}>23</span>
          <span className={style.text_fade_01}>24</span>
          <span className={style.text_fade_01}>25</span>
          <span className={style.text_fade_01}>26</span>
          <span className={style.text_fade_01}>27</span>
          <span className={style.text_fade_01}>28</span>
          <span className={style.text_fade_01}>29</span>
          <span className={style.text_fade_01}>30</span>
          <span className={style.text_fade_01}>31</span>
          <span className={style.text_fade_01}>32</span>
          <span className={style.text_fade_01}>33</span>
          <span className={style.text_fade_01}>34</span>
          <span className={style.text_fade_01}>35</span>
          <span className={style.text_fade_02}>36</span>
          <span className={style.text_fade_03}>37</span>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
          <span>45</span>
          <span>46</span>
          <span>47</span>
          <span>48</span>
          <span>49</span>
          <span>50</span>
          <span>51</span>
          <span>52</span>
          <span className={style.text_fade_03}>53</span>
          <span className={style.text_fade_02}>54</span>
          <span className={style.text_fade_01}>55</span>
        </motion.div>
        <div className={style.left_line}></div>
        <div className={style.left_line2}></div>
        <motion.div
          className={style.left_about}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "300px",
              opacity: 0,
            },
            visible: {
              y: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 3,
              },
            },
          }}
        >
          <span className={style.ml_2}> /**</span>
          <span style={{ fontWeight: "bold" }}>* About me</span>
          <span>
            * Detail-oriented and innovative Senior Front-End Developer
          </span>
          <span>
            * with over 5 years of experience designing and building scalable,
            high-performing
          </span>
          <span>
            * user interfaces aligned with modern best practices and business
            goals.
          </span>
          <span>
            * Proficient in HTML, CSS, JavaScript, TypeScript, React, React
            Hooks,
          </span>
          <span>
            * Redux, Next.js, and modern libraries/frameworks for creating
            exceptional user experiences.
          </span>
          <span>
            * Skilled in responsive design, performance optimization, and
            cross-functional collaboration
          </span>
          <span>
            * to deliver solutions that drive results and add value to
            stakeholders.
          </span>

          <span className={style.ml_2}>*/</span>
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={style.right}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: "100px",
              opacity: 0,
            },
            visible: {
              x: "0",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 2,
              },
            },
          }}
        >
          <div className={style.right_container}>
            <h3>Explorer</h3>
            <div className={style.right_interest}>
              <span>
                <FiChevronDown />
              </span>
              <span style={{ marginLeft: "5px" }}>STACK & SKILLS</span>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowFrontend(!showFrontend)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showFrontend ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(235,203,139)" }}>
                    <BsFolderFill />
                  </span>
                  <span>Frontend</span>
                </div>
                <AnimatePresence>
                  {showFrontend && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> React.js
                      </p>
                      <p>
                        <BsMarkdownFill /> Next.js
                      </p>
                      <p>
                        <BsMarkdownFill />
                        TypeScript
                      </p>
                      <p>
                        <BsMarkdownFill /> JavaScript (ES6+)
                      </p>
                      <p>
                        <BsMarkdownFill /> Redux
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className={style.skill}>
                <div
                  onClick={(e) => setShowBackend(!showBackend)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showBackend ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(128, 128, 128)" }}>
                    <BsFolderFill />
                  </span>
                  <span>Backend Knowledge</span>
                </div>
                <AnimatePresence>
                  {showBackend && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> Python
                      </p>
                      <p>
                        <BsMarkdownFill /> RESTful API
                      </p>
                      <p>
                        <BsMarkdownFill /> GraphQL
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className={style.skill}>
                <div
                  onClick={(e) => setShowStyling(!showStyling)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showStyling ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(191,97,106)" }}>
                    <BsFolderFill />
                  </span>
                  <span>Styling & UI</span>
                </div>
                <AnimatePresence>
                  {showStyling && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> CSS3
                      </p>
                      <p>
                        <BsMarkdownFill /> HTML5
                      </p>
                      <p>
                        <BsMarkdownFill /> Tailwind
                      </p>
                      <p>
                        <BsMarkdownFill /> Material UI
                      </p>
                      <p>
                        <BsMarkdownFill /> Styled Components
                      </p>
                      <p>
                        <BsMarkdownFill /> Storybook
                      </p>
                      <p>
                        <BsMarkdownFill /> Figma
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowTesting(!showTesting)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showTesting ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(163,190,140)" }}>
                    <BsFolderFill />
                  </span>
                  <span> Testing & CI/CD</span>
                </div>
                <AnimatePresence>
                  {showTesting && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> Cypress
                      </p>
                      <p>
                        <BsMarkdownFill /> Jest
                      </p>
                      <p>
                        <BsMarkdownFill /> Git
                      </p>
                      <p>
                        <BsMarkdownFill /> Netlify
                      </p>
                      <p>
                        <BsMarkdownFill /> Vercel
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className={style.skill}>
                <div
                  onClick={(e) => setShowDatabase(!showDatabase)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showDatabase ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(0, 0, 255)" }}>
                    <BsFolderFill />
                  </span>
                  <span> Database Expertise</span>
                </div>
                <AnimatePresence>
                  {showDatabase && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> SQLite
                      </p>
                      <p>
                        <BsMarkdownFill /> MySQL
                      </p>
                      <p>
                        <BsMarkdownFill /> Postgresql
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className={style.skill}>
                <div
                  onClick={(e) => setShowAdditionalTech(!showAdditionalTech)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showAdditionalTech ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronRight />
                    )}
                  </span>
                  <span style={{ color: "rgb(136,192,208)" }}>
                    <BsFolderFill />
                  </span>
                  <span> Additional Technologies</span>
                </div>
                <AnimatePresence>
                  {showAdditionalTech && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> Web3
                      </p>
                      <p>
                        <BsMarkdownFill /> Crypto
                      </p>
                      <p>
                        <BsMarkdownFill /> WebSocket
                      </p>
                      <p>
                        <BsMarkdownFill /> PWA
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowMethodologies(!showMethodologies)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showMethodologies ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(160, 102, 225)" }}>
                    <BsFolderFill />
                  </span>
                  <span> Methodologies</span>
                </div>
                <AnimatePresence>
                  {showMethodologies && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> Agile
                      </p>
                      <p>
                        <BsMarkdownFill /> Scrum
                      </p>
                      <p>
                        <BsMarkdownFill /> JIRA
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowFree(!showFree)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showFree ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "whitesmoke" }}>
                    <BsFolderFill />
                  </span>
                  <span> Free Time</span>
                </div>
                <AnimatePresence>
                  {showFree && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> Play video games
                      </p>
                      <p>
                        <BsMarkdownFill /> Hang out with friends
                      </p>
                      <p>
                        <BsMarkdownFill /> Learn new things
                      </p>
                      <p>
                        <BsMarkdownFill /> Building side project
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
