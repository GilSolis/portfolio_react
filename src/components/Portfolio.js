import React from 'react'
import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import project1 from "../images/championsleague.jpg"
import project2 from "../images/covidnstuff.jpg"
import project3 from "../images/password.jpg"
import project4 from "../images/burger.JPG"
import zIndex from '@material-ui/core/styles/zIndex';



const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        // margin: "3rem",
        margin: "5rem auto"
    },
    seeTheRest: {
        color: "white",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "100px",
        background: "#233",
        fontSize: "3rem"

    }
})


const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.mainContainer}>
                <Navbar />
                <Grid container justify='center' alignItems='center'>
                    { /* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    alt="Project 1"
                                    height="140"
                                    image={project1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 1 - Champions League Tracker
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Enables users to get the most current game data and videos from the Champions League. Users need to select two teams from the dropdown and press "Go" to view game date or schedule information. Additionally, videos of games played will be available.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/GilSolis/ChampionsLeague">
                                        <GitHubIcon />
                                    </a>

                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://alexshanless.github.io/Champ-Leag-Tracker">
                                        Live Demo
                                </a>
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                    { /* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    alt="Project 1"
                                    height="140"
                                    image={project2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 2 - Covid n Stuff
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Enables users to get up to date statistics surrounding Covid-19 in regards to number of cases and deaths broken down by location. Additionally, local users can view a dynamically updated data set of businesses along with their operational details. User can also read thoughts and prayers left by others or add a prayer of there oww in a Thoughts and Prayers social component.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/GilSolis/corona-virus-tracker">
                                        <GitHubIcon />
                                    </a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://covidnstuff.herokuapp.com/">
                                        Live Demo
                                </a>
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                    { /* Project 3 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    alt="Project 1"
                                    height="140"
                                    image={project3}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Password Generator
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        A password generator that works off user input to determine the length of password and which characters to include.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/GilSolis/ChampionsLeague">
                                        <GitHubIcon />
                                    </a>
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                    </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                    { /* Project 4 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    alt="Project 1"
                                    height="140"
                                    image={project4}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Burger Mania!
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Burger Mania! is a restaurant app that lets users input the names of burgers they'd like to eat and devour them.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" src="">
                                    <a href="https://github.com/GilSolis/ChampionsLeague">
                                        <GitHubIcon />
                                    </a>
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                    </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
            <a href="https://github.com/GilSolis" className={classes.seeTheRest} >See the Rest!</a>

        </>
    )
}

export default Portfolio;
