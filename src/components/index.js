import React from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
import Particles from 'react-particles-js'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
})


const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    interactivity: {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        }
                    }
                }}
            />
            <Header />
        </div>
    )
}

export default Home
