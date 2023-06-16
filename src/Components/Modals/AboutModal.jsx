import { Modal, Typography, Paper, Box, Fade } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "tss-react/mui";

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
          <Fade in={textFade} timeout={1500}>
            <Typography align="center" className={classes.textMain}>
              Hello! My name is William. I am software enginner with a focus on
              front-end web development.<br></br>I am proficient in the
              following technologies. <br></br> <br></br>{" "}
              <Box component="span" fontWeight="bold" fontSize="30px">
                React.JS
              </Box>{" "}
              <br></br>{" "}
              <Box component="span" fontWeight="bold" fontSize="30px">
                Express
              </Box>{" "}
              <br></br>{" "}
              <Box component="span" fontWeight="bold" fontSize="30px">
                Node.JS
              </Box>
              <br></br>{" "}
              <Box component="span" fontWeight="bold" fontSize="30px">
                MongoDB
              </Box>{" "}
              <br></br>{" "}
              <Box component="span" fontWeight="bold" fontSize="30px">
                GraphQL
              </Box>
            </Typography>
          </Fade>
        </Paper>
      </Modal>
    </>
  );
};
