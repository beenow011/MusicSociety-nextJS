"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicSchoolContent = [
    {
        title: "Expert Music Instruction",
        description:
            "Learn from our team of experienced musicians who are dedicated to helping you achieve your musical goals. Whether you're a beginner or an advanced player, our instructors provide personalized lessons tailored to your skill level and interests.",
    },
    {
        title: "Wide Range of Instruments",
        description:
            "Explore your passion for music with our diverse selection of instruments. From piano and guitar to violin and drums, we offer comprehensive instruction for a variety of instruments to suit your preferences and aspirations.",
    },
    {
        title: "Performance Opportunities",
        description:
            "Showcase your talent and gain valuable experience through our regular performance opportunities. Whether it's a recital, concert, or competition, we provide a supportive environment where you can share your love of music with others.",
    },
    {
        title: "Music Theory and Composition",
        description:
            "Deepen your understanding of music with our comprehensive courses in music theory and composition. Learn the fundamentals of harmony, melody, rhythm, and more, and unlock your creativity to compose your own original music.",
    },
];

export default function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={musicSchoolContent} />
        </div>
    )
}
