import React from 'react'
import { makeStyles } from "@material-ui/styles"
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: '60px',
        height: '60px',
        margin: '1px'
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }

}))

export const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                {/* <Avatar className={classes.avatar} src={avatar} alt="Gil Solis" /> */}
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Gil Solis"]} typeSpeed={70} />
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Design", "Web Development", "MERN Stack", "Some Other Buzz Words"]}
                    typeSpeed={70}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header;
