import { Modal, Typography, Paper, Fade} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "tss-react/mui";
import Skill from "../Menu/Skills";
import "./aboutme.css"

const modalAboutStyles = makeStyles()((theme) => {
  return {
    modal: {
      width: "600px",
      height: "600px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
      outline: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "600x",
      },
    },

    textMain: {
      color: "#2565ae",
      fontSize: "20px",
      margin: "20px",
    },
  };
});
export const AboutModal = (props) => {
  const { handleAboutModalClose, modalAbout, textFade } = props;

  const { classes } = modalAboutStyles();

  return (
    <>
      <Modal
        open={modalAbout}
        onClose={handleAboutModalClose}
        aria-labelledby="about modal"
        aria-describedby="about william payne"
      >
        <Paper className={classes.modal}>
          <CloseIcon
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={handleAboutModalClose}
          ></CloseIcon>
          <div className = "skills">
          <Fade in={textFade} timeout={1500}>
            <Typography align="center" className={classes.textMain}>
              Hello! My name is William. I am a software engineer with a focus
              on front-end web development.<br></br>I am proficient in the
              following technologies. <br></br> <br></br>{" "}

                  <div className = "skillsGrid">
                    <Skill
                      source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                      alt="The logo icon for react"
                      title="React"
                    />
                                                            <Skill
                      source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="The logo icon for Typescript"
                      title="typescript"
                    />
                                        <Skill
                      source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="The logo icon for node"
                      title="Node"
                    />
                                        <Skill
                      source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                      alt="The logo icon for Express"
                      title="Express"
                    />
                                        <Skill
                      source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="The logo icon for MongoDB"
                      title="MongoDB"
                    />
                                        <Skill
                      source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
                      alt="The logo icon for GraphQL"
                      title="GraphQL"
                    />

                  </div>

             
            </Typography>
          </Fade>
          </div>
        </Paper>
      </Modal>
    </>
  );
};
