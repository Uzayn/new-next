import Image from "next/image";

import { useState } from "react";

import ThankYouModal from "./ThankYouModal";

import { x } from "@/assets";

const WaitlistModal = ({ setshowModal }) => {

    const [showThankYouModal, setShowThankYouModal] = useState(false);

    return (
        <div className="">
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full md:w-auto my-6 mx-auto p-2">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-2 md:p-10">
                        <div className="">
                            <div className='flex justify-end p-2'>
                                <button
                                    onClick={() => setshowModal(false)}
                                ><Image src={x} alt="" /></button>
                            </div>
                            <h3 className="text-center text-[24px] md:text-[32px] text-greenGrow font-bold py-4">
                                Join Our Waitlist
                            </h3>
                        </div>

                        <div className="bg-[#C8C4C426] relative p-6 flex-auto">
                            <div >
                                <div className='w-full'>
                                    <p className='font-normal text-[18px] md:text-[24px] md:leading-8 mb-4'>Name</p>
                                    <input className='w-full md:w-[588px] h-[48px] border rounded-[8px] border-grey p-2' type="text" placeholder='Full Name' />
                                </div>
                                <div className='py-[24px] md:py-[46px] w-full'>
                                    <p className='font-normal text-[18px] md:text-[24px] md:leading-8 mb-4'>Email</p>
                                    <input className='w-full md:w-[588px] h-[48px] border rounded-[8px] border-grey p-2' type="email" placeholder='Email Address' />
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        className="bg-greenGrow text-white font-medium py-2 px-8 sm:py-[12px] sm:px-[139px] rounded-[8px] shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowThankYouModal(true)}>
                                        Join Our Waitlist
                                    </button>
                                    {showThankYouModal ? (<ThankYouModal setShowThankYouModal={setShowThankYouModal} />) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default WaitlistModal