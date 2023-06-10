import { Paper, Slide, Typography, Fade } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import React, { useRef, useState, useEffect } from "react";
import { SVG } from "./SVG";


const menuStyles = makeStyles()((theme) => {
  return {
    paper: {
      position: "relative",
      width: "1200px",
      height: "675px",


      [theme.breakpoints.down("lg")]: {
        position: "relative",
        width: "900px",
        height: "500px",

        
      },

      [theme.breakpoints.down("xs")]: {
        position: "relative",
        width: "100%",
        height: "240px",

      },
    },

    // game text and responsive attributes

    game: {
      fontFamily: "Orbitron",
      left: "210px",
      top: "415px",
      position: "absolute",
      color: "#2565ae",
      [theme.breakpoints.down("lg")]: {
        left: "153px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "130px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "19%",
        top: "62%",
      },
    },

    secondGame: {
      fontFamily: "Orbitron",
      left: "225px",
      display: "flex",
      position: "absolute",
      color: "#2565ae",
      [theme.breakpoints.down("lg")]: {
        left: "170px",
        top: "345px",
      },
      [theme.breakpoints.down("md")]: {
        left: "140px",
        top: "345px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "21%",
        top: "66%",
      },
    },

    // about text and responsive attributes
    about: {
      left: "447px",
      top: "415px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "340px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "100px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "39%",
        top: "60%",
      },
    },

    aboutRotate: {
      left: "447px",
      transition: "1s",
      transform: "rotate(90deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "340px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "280px",
        top: "320px",
      },
      
      [theme.breakpoints.down("xs")]: {
        left: "39%",
        top: "60%",
      },
    },

    aboutRotateTwo: {
      left: "447px",
      transition: "1s",
      transform: "rotate(100deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "340px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "280px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "39%",
        top: "60%",
      },
    },

    aboutRotateThree: {
      left: "447px",
      transition: "1s",
      transform: "rotate(80deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "340px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "340px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "280px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "39%",
        top: "60%",
      },
    },

    //project text and responsive attributes

    project: {
      top: "415px",
      position: "absolute",
      left: "625px",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "465px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "385px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "51.5%",
        top: "140px",
      },
    },

    projectRotate: {
      transform: "rotate(90deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      left: "625px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "465px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "390px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "51.5%",
        top: "60%",
      },
    },

    projectRotateTwo: {
      transform: "rotate(100deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      left: "625px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "465px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "390px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "51.5%",
        top: "60%",
      },
    },

    projectRotateThree: {
      transform: "rotate(80deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      left: "625px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "465px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "390px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "51.5%",
        top: "60%",
      },
    },

    //resume text and responsive attributes

    resume: {
      top: "415px",
      position: "absolute",
      left: "828px",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "623px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "545px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "66.5%",
        top: "140px",
      },
    },

    resumeRotate: {
      top: "415px",
      position: "absolute",
      left: "828px",
      color: "#2565ae",
      transform: "rotate(90deg)",
      transformOrigin: "0 50%",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "623px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "520px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "66.5%",
        top: "60%",
      },
    },

    resumeRotateTwo: {
      transform: "rotate(100deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      left: "828px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "623px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "520px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "66.5%",
        top: "60%",
      },
    },

    resumeRotateThree: {
      transform: "rotate(80deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      left: "828px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "623px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "520px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "66.5%",
        top: "60%",
      },
    },

    //contact text and responsive attributes

    contact: {
      top: "415px",
      position: "absolute",
      left: "1025px",
      color: "#2565ae",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "768px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "640px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "81%",
        top: "140px",
      },
    },
    contactRotate: {
      transform: "rotate(90deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      left: "1025px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "768px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "640px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "81%",
        top: "60%",
      },
    },

    contactRotateTwo: {
      transform: "rotate(100deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      left: "1025px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "768px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "640px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "81%",
        top: "60%",
      },
    },

    contactRotateThree: {
      transform: "rotate(80deg)",
      transformOrigin: "0 50%",
      top: "415px",
      position: "absolute",
      left: "1025px",
      color: "#2565ae",
      transition: "1s",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        left: "768px",
        top: "320px",
      },
      [theme.breakpoints.down("md")]: {
        left: "640px",
        top: "320px",
      },
      [theme.breakpoints.down("xs")]: {
        left: "81%",
        top: "60%",
      },
    },

    text: {
      fontSize: "30px",
      textDecoration: "none",
      [theme.breakpoints.down("lg")]: {
        fontSize: "25px",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
      },
    },
    gameText: {
      fontSize: "17px",
      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "7px",
      },
    },
    secondGameText: {
      fontSize: "17px",
      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "7px",
      },
    },

    scroll: {
      scrollBehavior: "smooth",
    },
  };
});

export const Menu = () => {
  const { classes } = menuStyles();

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
    setInterval(() => {
      setGame(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setGame(false);
    }, 4000);
  }, []);

  //set timing of about
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
    <>
      <Paper className={classes.paper} elevation={3}>
        <SVG />
        <a target="blank" href="https://wjpayne.github.io/frogger/">
          <div className={classes.game}>
            <Fade in={game} timeout={1000}>
              <h1 className={classes.gameText}>Wanna play</h1>
            </Fade>
          </div>

          <div className={classes.secondGame}>
            <Fade in={game} timeout={500}>
              <h1 className={classes.secondGameText}>a game?</h1>
            </Fade>
          </div>
        </a>
        
          <div className={classes[aboutRef.current]}>
            <Slide direction="left" in={about} mountOnEnter unmountOnExit>
              <Typography className={classes.text}>About me</Typography>
            </Slide>
          </div>
        
       
          <div className={classes[projectRef.current]}>
            <Slide direction="right" in={project} mountOnEnter unmountOnExit>
              <Typography className={classes.text}>Projects</Typography>
            </Slide>
          </div>
    
        <a target="blank" href="https://william-payne-resume.herokuapp.com/">
          <div className={classes[resumeRef.current]}>
            <Slide direction="left" in={resume} mountOnEnter unmountOnExit>
              <Typography className={classes.text}>Resume</Typography>
            </Slide>
          </div>
        </a>
        
          <div className={classes[contactRef.current]}>
            <Slide direction="right" in={contact} mountOnEnter unmountOnExit>
              <Typography className={classes.text}>Contact</Typography>
            </Slide>
          </div>
        
      </Paper>
      </>
  );
};
