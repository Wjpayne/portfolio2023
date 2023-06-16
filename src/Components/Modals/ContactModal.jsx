import { Modal, Typography, Paper } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from 'tss-react/mui';

const modalContactStyles = makeStyles()((theme) => {
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
export const ContactModal = (props) => {

    const {handleContactModalClose, modalContact} = props

    const {classes} = modalContactStyles() 

  return (
<>
        <Modal
        open = {modalContact}
        onClose = {handleContactModalClose}
        aria-labelledby="about modal"
        aria-describedby="about william payne"
        >
        <Paper className = {classes.modal}>
            <CloseIcon
            sx = {{position: "absolute", top: "0", right: "0", margin: "10px", cursor: "pointer"}}
            onClick = {handleContactModalClose}
            >

            </CloseIcon>
            hello
        </Paper>

        </Modal>

    </>
  )
}
