import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato",
    },
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan",
            },
        },
    },
})(TextField);

const Contacts = () => {
    const classes = useStyles();
    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography
                        variant="h5"
                        style={{
                            color: "tomato",
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        Email me! GilbertSolis_@hotmail.com
          </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        varaint="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Email"
                        varaint="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Company Name"
                        varaint="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <Button
                        className={classes.button}
                        variant="outlined"
                        fullWidth={true}
                        endIcon={<SendIcon />}
                    >
                        Send it
          </Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contacts;