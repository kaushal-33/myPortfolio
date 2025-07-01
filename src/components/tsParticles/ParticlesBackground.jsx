import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => setInit(true));
    }, []);

    const options = useMemo(() => ({
        // background: {
        //     color: { value: "" },
        // },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 150, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#27a776" },
            links: { enable: false },
            collisions: { enable: false },
            move: {
                enable: true,
                speed: 2,
                direction: "left",
                outModes: { default: "bounce" },
            },
            number: {
                value: 30,
                density: { enable: true, area: 800 },
            },
            opacity: { value: 0.5 },
            shape: { type: "star" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    }), []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute top-0 left-0 w-full h-full z-0"
        />
    );
};

export default ParticlesBackground;
