import { Paper, Slide, Typography, Fade } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import React, { useRef, useState, useEffect } from "react";
import { SVG } from "./SVG";
import { AboutModal } from "../Modals/AboutModal";
import { ProjectModal } from "../Modals/ProjectModal";
import { ContactModal } from "../Modals/ContactModal";

const menuStyles = makeStyles()((theme) => {
  return {
    paper: {
      position: "relative",
      width: "1200px",
      height: "670px",
      marginBottom: "25px",

      [theme.breakpoints.down("lg")]: {
        width: "900px",
        height: "500px",
      },

      [theme.breakpoints.down("sm")]: {
        width: "390px",
        height: "300px",
      },
    },

    // game text and responsive attributes

    game: {
      fontFamily: "Epilogue",
      left: "220px",
      top: "415px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "153px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "153px",
        top: "320px",
      },
      [theme.breakpoints.down("sm")]: {
        left: "60px",
        top: "140px",
      },
    },

    secondGame: {
      fontFamily: "Epilogue",
      left: "237px",
      top: "440px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "170px",
        top: "348px",
      },
      [theme.breakpoints.down("md")]: {
        left: "164px",
        top: "348px",
      },
      [theme.breakpoints.down("sm")]: {
        left: "70px",
        top: "158px",
      },
    },

    // about text and responsive attributes
    about: {
      left: "447px",
      top: "385px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "340px",
        top: "300px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "147px",
        top: "135px",
      },
    },

    aboutRotate: {
      left: "447px",
      transition: "1s",
      transform: "rotate(90deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",

      [theme.breakpoints.down("lg")]: {
        left: "340px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "147px",
        top: "125px",
      },
    },

    aboutRotateTwo: {
      left: "447px",
      transition: "1s",
      transform: "rotate(100deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "340px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "147px",
        top: "125px",
      },
    },

    aboutRotateThree: {
      left: "447px",
      transition: "1s",
      transform: "rotate(80deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "340px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "147px",
        top: "125px",
      },
    },

    //project text and responsive attributes

    project: {
      top: "385px",
      position: "absolute",
      left: "625px",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "465px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "203px",
        top: "125px",
      },
    },

    projectRotate: {
      transform: "rotate(90deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      left: "625px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "465px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "203px",
        top: "125px",
      },
    },

    projectRotateTwo: {
      transform: "rotate(100deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      left: "625px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "465px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "203px",
        top: "125px",
      },
    },

    projectRotateThree: {
      transform: "rotate(80deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      left: "625px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "465px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "203px",
        top: "125px",
      },
    },

    //resume text and responsive attributes

    resume: {
      top: "385px",
      position: "absolute",
      left: "828px",
      color: "#2565ae",

      [theme.breakpoints.down("lg")]: {
        left: "623px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "270px",
        top: "125px",
      },
    },

    resumeRotate: {
      top: "385px",
      position: "absolute",
      left: "828px",
      color: "#2565ae",
      transform: "rotate(90deg)",
      transformOrigin: "0 50%",
      transition: "1s",

      [theme.breakpoints.down("lg")]: {
        left: "623px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "270px",
        top: "125px",
      },
    },

    resumeRotateTwo: {
      transform: "rotate(100deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      left: "828px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "623px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "270px",
        top: "125px",
      },
    },

    resumeRotateThree: {
      transform: "rotate(80deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      left: "828px",
      color: "#2565ae",
      transition: "1s",

      [theme.breakpoints.down("lg")]: {
        left: "623px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "270px",
        top: "125px",
      },
    },

    //contact text and responsive attributes

    contact: {
      top: "385px",
      position: "absolute",
      left: "1025px",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "780px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "333px",
        top: "125px",
      },
    },
    contactRotate: {
      transform: "rotate(90deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      left: "1025px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "768px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "333px",
        top: "125px",
      },
    },

    contactRotateTwo: {
      transform: "rotate(100deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      left: "1025px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "768px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "333px",
        top: "125px",
      },
    },

    contactRotateThree: {
      transform: "rotate(80deg)",
      transformOrigin: "0 50%",
      top: "385px",
      position: "absolute",
      left: "1025px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "768px",
        top: "295px",
      },

      [theme.breakpoints.down("sm")]: {
        left: "333px",
        top: "125px",
      },
    },

    text: {
      cursor: "pointer",
      fontSize: "30px",
      textDecoration: "none",

      [theme.breakpoints.down("lg")]: {
        fontSize: "25px",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },

    //text styles
    gameText: {
      fontSize: "17px",

      [theme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
    },
    secondGameText: {
      fontSize: "17px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
    },
  };
});

export const Menu = () => {
  const { classes } = menuStyles();

  //set states for modals

  const [modalAbout, setModalAbout] = useState(false);
  const [modalProject, setModalProject] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  
  //set state for game text fade in and out
  const [textFade, setTextFade] = useState(false);
  // set state for alarm text for email form
  const [success, setSuccess] = useState(false);

  //handlers for modal open and close

  const handleAboutModalOpen = () => {
    setModalAbout(true);
    setTextFade(true);
  };

  const handleAboutModalClose = () => {
    setModalAbout(false);
    setTextFade(false);
  };

  const handleProjectModalOpen = () => {
    setModalProject(true);
  };

  const handleProjectModalClose = () => {
    setModalProject(false);
  };

  const handleContactModalOpen = () => {
    setModalContact(true);
  };

  const handleContactModalClose = () => {
    setModalContact(false);
    setSuccess(false);
  };

  //set init state for words coming into screen

  const [about, setAbout] = useState(false);
  const [project, setProject] = useState(false);
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);
  const [game, setGame] = useState(false);

  // set state for rotation

  const [aboutMove, setAboutMove] = useState("about");
  const [projectMove, setProjectMove] = useState("project");
  const [resumeMove, setResumeMove] = useState("resume");
  const [contactMove, setContactMove] = useState("contact");

  //set refs DOM

  const aboutRef = useRef();
  const projectRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();

  aboutRef.current = aboutMove;
  projectRef.current = projectMove;
  resumeRef.current = resumeMove;
  contactRef.current = contactMove;

  // set timing for game
  useEffect(() => {
    const interval = setInterval(() => setGame((prev) => !prev), 1500);
    return () => clearInterval(interval);
  }, []);

  //set timing for about
  useEffect(() => {
    setTimeout(() => {
      setAbout(true);
    }, 700);

    setTimeout(() => {
      setAboutMove("aboutRotate");
    }, 1000);

    setTimeout(() => {
      setAboutMove("aboutRotateTwo");
    }, 1500);
    setTimeout(() => {
      setAboutMove("aboutRotateThree");
    }, 2000);

    setTimeout(() => {
      setAboutMove("aboutRotate");
    }, 2500);
  }, []);

  //set timing for project

  useEffect(() => {
    setTimeout(() => {
      setProject(true);
    }, 1200);

    setTimeout(() => {
      setProjectMove("projectRotate");
    }, 1500);
    setTimeout(() => {
      setProjectMove("projectRotateTwo");
    }, 2000);
    setTimeout(() => {
      setProjectMove("projectRotateThree");
    }, 2500);
    setTimeout(() => {
      setProjectMove("projectRotate");
    }, 3000);
  }, []);

  //set Timing for resume

  useEffect(() => {
    setTimeout(() => {
      setResume(true);
    }, 1700);

    setTimeout(() => {
      setResumeMove("resumeRotate");
    }, 2000);
    setTimeout(() => {
      setResumeMove("resumeRotateTwo");
    }, 2500);
    setTimeout(() => {
      setResumeMove("resumeRotateThree");
    }, 3000);
    setTimeout(() => {
      setResumeMove("resumeRotate");
    }, 3500);
  }, []);

  //set timing for contact

  useEffect(() => {
    setTimeout(() => {
      setContact(true);
    }, 2000);

    setTimeout(() => {
      setContactMove("contactRotate");
    }, 2300);

    setTimeout(() => {
      setContactMove("contactRotateTwo");
    }, 2700);

    setTimeout(() => {
      setContactMove("contactRotateThree");
    }, 3200);
    setTimeout(() => {
      setContactMove("contactRotate");
    }, 3700);
  }, []);
  return (
    <div>
      <Paper className={classes.paper} elevation={3}>
        <a target="blank" href="https://wjpayne.github.io/frogger/">
          <div className={classes.game}>
            <Fade in={game} timeout={1000}>
              <Typography className={classes.gameText}>Wanna play</Typography>
            </Fade>
          </div>

          <div className={classes.secondGame}>
            <Fade in={game} timeout={500}>
              <Typography className={classes.secondGameText}>
                a game?
              </Typography>
            </Fade>
          </div>
        </a>

        <div
          onClick={handleAboutModalOpen}
          className={classes[aboutRef.current]}
        >
          <Slide direction="left" in={about} mountOnEnter unmountOnExit>
            <Typography className={classes.text}>About me</Typography>
          </Slide>
        </div>
        <AboutModal
          handleAboutModalClose={handleAboutModalClose}
          modalAbout={modalAbout}
          textFade={textFade}
        ></AboutModal>

        <div
          onClick={handleProjectModalOpen}
          className={classes[projectRef.current]}
        >
          <Slide direction="right" in={project} mountOnEnter unmountOnExit>
            <Typography className={classes.text}>Projects</Typography>
          </Slide>
        </div>
        <ProjectModal
          handleProjectModalClose={handleProjectModalClose}
          modalProject={modalProject}
        ></ProjectModal>

        <a target="blank" href="https://updated-resume-henna.vercel.app/">
          <div className={classes[resumeRef.current]}>
            <Slide direction="left" in={resume} mountOnEnter unmountOnExit>
              <Typography className={classes.text}>Resume</Typography>
            </Slide>
          </div>
        </a>

        <div
          onClick={handleContactModalOpen}
          className={classes[contactRef.current]}
        >
          <Slide direction="right" in={contact} mountOnEnter unmountOnExit>
            <Typography className={classes.text}>Contact</Typography>
          </Slide>
        </div>
        <ContactModal
          handleContactModalClose={handleContactModalClose}
          modalContact={modalContact}
          success={success}
          setSuccess={setSuccess}
        ></ContactModal>
        <SVG
          handleAboutModalOpen={handleAboutModalOpen}
          handleProjectModalOpen={handleProjectModalOpen}
          handleContactModalOpen={handleContactModalOpen}
        />
      </Paper>
    </div>
  );
};
