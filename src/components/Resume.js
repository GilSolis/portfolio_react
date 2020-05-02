import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const Resume = () => {
    return (
        <>
            <Navbar />
            <Box component='header'>
                <Typography variant='h4' align='center'>
                    RESUME!!!
                </Typography>
            </Box>
        </>
    )
}

export default Resume;