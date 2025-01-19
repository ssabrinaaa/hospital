"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Lab Test',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'X- Ray',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Ultrasound',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/coursethree.png',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Primary Care',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Emergencies',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Family Med',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/coursethree.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'OBGYN',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Surgery',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'CT Scan',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Health Consultation',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Lab Work',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Wavi Testing',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="courses">
    <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8">
        <div className="sm:flex justify-between items-center">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">All services.</h3>
            {/* <Link href={'/services'} className="text-Blueviolet text-lg font-medium space-links">Explore Services&nbsp;&gt;&nbsp;</Link> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {postData.map((items, i) => (
                <div key={i} className="bg-white px-6 py-8 shadow-courses rounded-2xl">
                    {/* Card Content */}
                    <h4 className="text-2xl font-bold text-black">{items.heading}</h4>
                    <div className="flex justify-between items-center py-6">
                        <div className="flex gap-4">
                            {/* <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                            <div className="flex">
                                <StarIcon className="h-5 w-5 text-gold" />
                                <StarIcon className="h-5 w-5 text-gold" />
                                <StarIcon className="h-5 w-5 text-gold" />
                                <StarIcon className="h-5 w-5 text-gold" />
                                <StarIcon className="h-5 w-5 text-gold" />
                            </div> */}
                        </div>
                        {/* <h3 className="text-3xl font-medium">${items.price}</h3> */}
                    </div>

                    <hr style={{ color: "#C4C4C4" }} />

                    <div className="flex justify-between pt-6">
                        <div className="flex gap-4">
                            {/* <Image src={'/assets/courses/book-open.svg'} alt="classes" width={24} height={24} className="inline-block m-auto" />
                            <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3> */}
                        </div>
                        <div className="flex gap-4">
                            {/* <Image src={'/assets/courses/users.svg'} alt="students" width={24} height={24} className="inline-block m-auto" />
                            <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

        );
    }
}
