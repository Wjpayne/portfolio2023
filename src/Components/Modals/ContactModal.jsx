import {
  Modal,
  Paper,
  TextField,
  FormControl,
  FormLabel,
  Button,
  Alert,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "tss-react/mui";
import emailjs from "@emailjs/browser";

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

    input: {
      margin: "20px",
    },

    inputMessage: {
      margin: "20px",
      height: "100px",
    },

    button: {
      "&:hover": {
        backgroundColor: "white",
      },
      fontSize: "20px",
      margin: "15px",
    },
  };
});
export const ContactModal = (props) => {
  const { handleContactModalClose, modalContact, success, setSuccess } = props;

  const { classes } = modalContactStyles();

  //set up for contact form

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ugx72qj",
        "template_43684yo",
        e.target,
        "ivtg-qlx32QWWU4vX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
      <Modal
        open={modalContact}
        onClose={handleContactModalClose}
        aria-labelledby="about modal"
        aria-describedby="about william payne"
      >
        <Paper className={classes.modal}>
          <form onSubmit={sendEmail}>
            <CloseIcon
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                margin: "10px",
                cursor: "pointer",
              }}
              onClick={handleContactModalClose}
            ></CloseIcon>

            <FormControl>
              <FormLabel
                sx={{
                  color: "#2565ae",
                  fontSize: "30px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                Feel free to contact me!
              </FormLabel>
              <TextField
                name="from_name"
                className={classes.input}
                required
                type="text"
                label="Enter name"
              ></TextField>
              <TextField
                name="user_email"
                className={classes.input}
                required
                type="email"
                label="Enter your email"
              ></TextField>
              <TextField
                name="message"
                className={classes.inputMessage}
                required
                type="text"
                label="Enter your message"
                multiline={true}
                rows={5}
              ></TextField>

              <Button type="submit" disableRipple className={classes.button}>
                Submit
              </Button>
              {success && (
                <Alert severity="success" sx={{ fontSize: "20px" }}>
                  Thank you! I will get back to you shortly
                </Alert>
              )}
            </FormControl>
          </form>
        </Paper>
      </Modal>
    </>
  );
};
