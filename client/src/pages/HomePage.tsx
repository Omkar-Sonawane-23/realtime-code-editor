import FormComponent from "@/components/forms/FormComponent"
import logo_devconnect from "@/assets/logo/logo_devconnect.png"

import home_image1 from "@/assets/home_img1.jpg"
import home_image2 from "@/assets/home_img2.jpg"
import home_image3 from "@/assets/home_img3.jpg"
import home_image4 from "@/assets/home_img4.jpg"
import home_image5 from "@/assets/home_img5.jpg"
import { FaReact } from "react-icons/fa"
import {
    SiNodedotjs,
    SiExpress,
    SiSocketdotio,
    SiTailwindcss,
    SiCss3,
    SiHtml5,
} from "react-icons/si"

import { FaVideo, FaComments, FaTools } from "react-icons/fa";
import video from "../assets/hero-banner-video.mp4"



function HomePage() {
    return (
        <>
            <div className="relative flex min-h-screen flex-col items-center justify-center">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        autoPlay
                        muted
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="relative z-10 my-12 flex h-full w-full flex-col items-center justify-between gap-64 sm:flex-row sm:pt-0">
                    <div className="flex flex-col items-center justify-center sm:w-1/2">
                        <div className="-ml-20 mb-8">
                            <img
                                src={logo_devconnect}
                                alt="DevConnect Logo"
                                width={250}
                                height={250}
                                className="invert"
                            />
                        </div>

                        <div className="">
                            <div className="space-y-2 text-left text-6xl font-bold text-white">
                                <p>Join</p>
                                <p className="text-orange-500">Code</p>
                                <p>Collaborate</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-center justify-center sm:w-1/2">
                        <FormComponent />
                    </div>
                </div>
            </div>


            {/* tech stack */}
            <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <h2 className="mb-4 text-center text-3xl font-bold text-white">
                    Tech Stack
                </h2>
                <div className="flex cursor-pointer flex-wrap justify-center gap-6">
                    <div className="flex items-center space-x-2 text-white">
                        <FaReact className="text-4xl" />
                        <span className="text-lg">React.js</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <SiNodedotjs className="text-4xl" />
                        <span className="text-lg">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <SiExpress className="text-4xl" />
                        <span className="text-lg">Express.js</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <SiSocketdotio className="text-4xl" />
                        <span className="text-lg">Socket.io</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <SiTailwindcss className="text-4xl" />
                        <span className="text-lg">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <SiCss3 className="text-4xl" />
                        <span className="text-lg">CSS</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <SiHtml5 className="text-4xl" />
                        <span className="text-lg">HTML</span>
                    </div>
                </div>
            </div>

            <div>
                <div className="w-full bg-gray-900 py-12 duration-200">
                    <div className="relative z-10 flex flex-col items-center justify-center duration-200">
                        <h2 className="mb-8 text-4xl font-bold text-white">
                            Project Features
                        </h2>
                        <div className="grid grid-cols-1 gap-8 px-20 sm:grid-cols-2">
                            <div className="flex transform flex-col items-center transition-transform hover:scale-105 duration-200">
                                <img
                                    src={home_image1}
                                    alt="Structure 1"
                                    className="h-96 w-full rounded-lg shadow-lg"
                                />
                                <p className="mt-4 text-center text-white">
                                    Code Editor
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center transition-transform hover:scale-105 duration-200">
                                <img
                                    src={home_image2}
                                    alt="Structure 2"
                                    className="h-96 w-full rounded-lg shadow-lg"
                                />
                                <p className="mt-4 text-center text-white">
                                    Live Chatting
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center transition-transform hover:scale-105 duration-200">
                                <img
                                    src={home_image3}
                                    alt="Structure 3"
                                    className="h-96 w-full rounded-lg shadow-lg"
                                />
                                <p className="mt-4 text-center text-white">
                                    Runtime Environment
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center transition-transform hover:scale-105 duration-200">
                                <img
                                    src={home_image4}
                                    alt="Structure 4"
                                    className="h-96 w-full rounded-lg shadow-lg"
                                />
                                <p className="mt-4 text-center text-white">
                                    collaboration
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center transition-transform hover:scale-105 duration-200">
                                <img
                                    src={home_image5}
                                    alt="Structure 5"
                                    className="h-96 w-full rounded-lg shadow-lg"
                                />
                                <p className="mt-4 text-center text-white">
                                    Drawing board for explaining concepts
                                </p>
                            </div>
                        </div>
                        <p className="mt-8 text-center text-lg text-gray-300">
                            Explore the internal structure that powers
                            DevConnect and enhances collaborative coding
                            experiences!
                        </p>
                    </div>
                </div>

                <div className="max-w-md mx-auto px-10 bg- rounded-xl shadow-md overflow-hidden md:max-w-2xl py-10 mt-5">
                    <div className="p-4 bg-gray-700 rounded-xl">
                        <h1 className="text-3xl font-bold text-white mb-4">Future Enahncement Features</h1>
                        <ul className="space-y-4">
                            {/* Feature 1: Live Meet */}
                            <li className="flex items-center space-x-3">
                                <FaVideo className="text-blue-500 text-xl" />
                                <span className="text-white font-medium">Live Meet (Video Call, Screen Share)</span>
                            </li>

                            {/* Feature 2: Chat with File Upload */}
                            <li className="flex items-center space-x-3">
                                <FaComments className="text-green-500 text-xl" />
                                <span className="text-white font-medium">Chat with File, Image, and Video Upload</span>
                            </li>

                            {/* Feature 3: Integrated AI Tools in Drawing */}
                            <li className="flex items-center space-x-3">
                                <FaTools className="text-purple-500 text-xl" />
                                <span className="text-white font-medium">Integrated AI Tools in Drawing</span>
                            </li>

                            <li className="flex items-center space-x-3">
                                <span className="text-xl">🛠️</span>
                                <span className="text-white font-medium">Project Management Tools</span>
                            </li>

                            <li className="flex items-center space-x-3">
                                <span className="text-xl">✅</span>
                                <span className="text-white font-medium">AI Todo List</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage