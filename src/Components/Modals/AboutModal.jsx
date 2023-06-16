import { Modal, Typography, Paper } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';


const style = {
    width: "400px",
    height: "400px",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    outline: "none"

}
export const AboutModal = (props) => {

    const {handleAboutModalClose, modalAbout} = props

  return (
<>
        <Modal
        open = {modalAbout}
        onClose = {handleAboutModalClose}
        aria-labelledby="about modal"
        aria-describedby="about william payne"
        >
        <Paper sx = {{...style}}>
            <CloseIcon
            sx = {{position: "absolute", top: "0", right: "0", margin: "10px", cursor: "pointer"}}
            onClick = {handleAboutModalClose}
            >

            </CloseIcon>
            hello
        </Paper>

        </Modal>

    </>
  )
}
