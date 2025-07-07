import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
    items,
    className = "",
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = "power3.out",
}) => {
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    const data = items;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, "--x", "px");
        setY.current = gsap.quickSetter(el, "--y", "px");
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true,
        });
    };

    const handleMove = (e) => {
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true,
        });
    };

    const handleCardClick = (url) => {
        if (url) window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleCardMove = (e) => {
        const c = e.currentTarget;
        const rect = c.getBoundingClientRect();
        c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative justify-center flex flex-wrap gap-5 ${className}`}
            style={
                {
                    "--r": `${radius}px`,
                    "--x": "50%",
                    "--y": "50%",
                }
            }
        >
            {data.map((c, i) => (
                <article
                    key={i}
                    onMouseMove={handleCardMove}
                    onClick={() => handleCardClick(c.url)}
                    className="relative w-3/12 overflow-hidden rounded-md border-2 border-transparent transition-colors duration-300 cursor-pointer"
                    style={
                        {
                            "--card-border": c.borderColor || "transparent",
                            background: c.gradient,
                            "--spotlight-color": "rgba(255,255,255,0.3)",
                        }
                    }
                >
                    <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                        style={{
                            background:
                                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
                        }}
                    />
                    <div className="relative z-10 flex-1 h-[200px] p-[15px] box-border">
                        <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            className="w-full h-full rounded-md"
                        />
                    </div>
                    <footer className="relative z-10 p-3 text-white font-sans">
                        <h3 className="m-0 text-[1.05rem] font-semibold mb-2">{c.title}</h3>
                        <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
                        {c.note &&
                            <p class="text-red-700 text-sm">
                                Note*: This website is not
                                responsive, but it is only for demonstration purposes and can be made available upon request
                                from the client.
                            </p>
                        }
                    </footer>
                </article>
            ))}
            <div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                    backdropFilter: "grayscale(1) brightness(0.78)",
                    WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
                    background: "rgba(0,0,0,0.001)",
                    maskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
                }}
            />
            <div
                ref={fadeRef}
                className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
                style={{
                    backdropFilter: "grayscale(1) brightness(0.78)",
                    WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
                    background: "rgba(0,0,0,0.001)",
                    maskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
                    opacity: 1,
                }}
            />
        </div>
    );
};

export default ChromaGrid;
