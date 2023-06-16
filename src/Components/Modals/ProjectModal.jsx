import { Modal, Typography, Paper, Card, CardHeader, CardMedia, CardContent, IconButton, Link } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "tss-react/mui";
import { CarouselProject } from "./Carousel/CarouselProject";
import { GitHub } from "@mui/icons-material";

const modalProjectStyles = makeStyles()((theme) => {
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
export const ProjectModal = (props) => {
  const { handleProjectModalClose, modalProject } = props;

  const { classes } = modalProjectStyles();

  return (
    <>
      <Modal
        open={modalProject}
        onClose={handleProjectModalClose}
        aria-labelledby="about modal"
        aria-describedby="about william payne"
      >
        <Paper className={classes.modal}>

          <Card sx = {{width: "400px"}}>
            <CardHeader sx = {{color: "#2565ae"}} title = "Dijkstra Visualizer" subheader = "A Web App that let's you have a little fun with algorithms (This app is Web only and not available on mobile devices)"/>
              <CardMedia component={CarouselProject} />
              <CardContent sx = {{marginTop: "70px"}}>
                Check out the live project <a style = {{color: "black"}} target = "blank" href ="https://dijkstra-visualizer-chi.vercel.app/">
                here
                </a>
                <IconButton aria-label = "link to github for Dijkstra-visualizer">
                  <Link sx = {{color: "black"}} target = "blank" href = "https://github.com/Wjpayne/dijkstra-visualizer">
                    <GitHub />
                  </Link>
                </IconButton>
              </CardContent>
              
           

          </Card>
          <CloseIcon
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={handleProjectModalClose}
          ></CloseIcon>
         
        </Paper>
      </Modal>
    </>
  );
};
