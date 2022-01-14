import Particles from "react-tsparticles";

function ParticleJS() {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 1200
                        }
                    },
                    color: {
                        value: "#636e72"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: 0.4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable_auto: true,
                        distance: 100,
                        color: "#fff",
                        opacity: .9,
                        width: 1,
                        shadow: {
                            enable: true,
                            color: "#e74c3c",
                            blur: 5
                        },
                        condensed_mode: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600
                        }
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                }
            }}
        />
    );
}
export default ParticleJS;