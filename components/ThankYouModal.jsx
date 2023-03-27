import Image from "next/image";

import { x, verified } from "@/assets";

const ThankYouModal = ({ setShowThankYouModal }) => {
    return (

        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">

                        <div className="text-center">
                            <div className='flex justify-end mb-[30px]' >
                                <button
                                    onClick={() => setShowThankYouModal(false)}
                                ><Image src={x} alt="" /></button>
                            </div>
                            <div className='flex justify-center mb-7'>
                                <Image src={verified} alt="" />
                            </div>
                            <h1 className='font-bold text-[24px] md:text-[32px] text-offBlack leading-[40px] mb-8px '>Thank you!</h1>
                            <p className='font-normal text-[16px] md:text-[24px] text-grey leading-[30px]'>You’ve been added to the grow waitlist </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default ThankYouModal;