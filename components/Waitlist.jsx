import Image from 'next/image'

import { useState } from 'react'
import { motion } from 'framer-motion';

import WaitlistModal from './WaitlistModal';

import { LaunchImg } from '@/assets';

const Waitlist = () => {

    const titleEffect = {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.2
        },
    };
    const [showModal, setshowModal] = useState(false);

    return (
        <section id='waitlist' className={`px-6 lg:px-[120px] py-[40px] md:py-[70px] bg-gradient-to-r from-[#f3f7f5] to-[#daf8ed]`}>
            <div className={`flex md:flex-row flex-col`}>
                <motion.div
                    whileInView={titleEffect}
                    initial={{ y: "100px", opacity: 0 }}
                    className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10`}>
                    <Image src={LaunchImg} alt="LaunchImg" className='sm:w-2/3 md:w-auto' />
                </motion.div>
                <motion.div
                    whileInView={titleEffect}
                    initial={{ y: "-100px", opacity: 0 }}
                    className={`flex-1 flex justify-center items-start flex-col md:w-[634px] mb:pb-[150px]`}>
                    <h1 className='font-extrabold text-offBlack text-[45px] leading-[52px]'>Get Early Access</h1>
                    <p className='font-normal text-offBlack text-[28px] mb-[40px] leading-9'>We are launching soon. Be the first to get access to the grow app</p>
                    <button className='border-2 border-none bg-accentGreen text-black text-[16px] leading-[24px] px-10 py-2 rounded-[8px] hover:text-white hover:bg-greenGrow'
                        onClick={() => setshowModal(true)}
                    >
                        Join our Waitlist
                    </button>
                    {showModal ? (
                        <WaitlistModal setshowModal={setshowModal} />
                    ) : null}

                </motion.div>
            </div>
        </section>
    )
}

export default Waitlist