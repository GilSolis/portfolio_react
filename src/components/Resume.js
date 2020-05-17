import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Pdf from "../documents/GilbertSolisResume.pdf"

const useStyles = makeStyles({
    style: {
        color: "white"

    }
})

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component='header'>
                <Typography variant='h4' align='center' style={{ marginTop: "5%" }}>
                    <a href={Pdf} target="_blank" className={classes.style}>Click Me!</a>
                </Typography>
            </Box>
        </>
    )
}

export default Resume;