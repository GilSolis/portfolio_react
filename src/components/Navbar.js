import React, { useState } from 'react'
import { makeStyles } from "@material-ui/styles";
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,

} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail

} from "@material-ui/icons"
import avatar from "../avatar.png"

//styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "30rem"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        // width: '50px',
        // height: '50px'
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact"
    }
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    }
    const classes = useStyles()
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="nav">
            <Avatar className={classes.avatar} src={avatar} alt="Gil Solis" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>

        </Box>

    )
    return (
        <>

            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{ color: "tomato" }}></ArrowBack>
                        </IconButton>
                        <Typography variant="h5" >
                            Portfolio
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
