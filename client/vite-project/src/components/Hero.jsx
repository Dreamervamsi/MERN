import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video from '../assets/WhatsApp Video 2025-12-08 at 1.16.11 PM.mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            textRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );

        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: false
            },
            y: 200,
            scale: 1.1,
            ease: "none"
        });

        gsap.to(textRef.current, {
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: -100,
            ease: "none"
        });

    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
            <video
                ref={videoRef}
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="relative z-20 flex items-center h-full text-white">
                <div className="container mx-auto px-6 md:px-12" ref={textRef}>
                    <h1 className="text-6xl font-extrabold tracking-tight mb-6 leading-tight text-left">
                        Smart Logistics for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-300">
                            A Better Future
                        </span>
                    </h1>
                    <p className="mb-10 max-w-2xl text-gray-200 text-left text-xl">
                        Connect with trusted transport owners. AI-powered matching for load type, weight, and value.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="border border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded transition duration-300">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
