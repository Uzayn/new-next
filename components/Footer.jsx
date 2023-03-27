import Link from "next/link"
import Image from "next/image"

import { growWhite, support, location, facebook, twitter, linkedIn } from "@/assets"

const Footer = () => {

    return (
        <footer id='footer' className={`px-6 lg:px-[120px] text-white bg-greenGrow pb-10 font-normal text-[16px] leading-[24px]`}>
            <div className='pt-[70px] sm:flex justify-between'>
                <div>
                    <div>
                        <Image src={growWhite} alt="" className='mb-[24px]' />
                    </div>
                    <div className='mb-10 sm:mb-[95px]'>
                        <div>
                            <Image src={location} alt="" className='inline-block mr-2 pb-1' />
                            <span className='text-accentGreen'>Address:</span> <br />
                            10A, Munirat Abike Close, <br />
                            Lagos State.
                        </div>
                        <div className='my-5'>
                            <Image src={support} alt="" className='inline-block mr-2' />
                            <span className='text-accentGreen'>Customer support:</span> <br />
                            support@growng.company
                        </div>
                        <div className=''>
                            <div className='flex mt-[16.75px]'>
                                <a target="_blank" href="https://twitter.com/useGrow"><Image src={twitter} alt="twitter" /></a>
                                <a target="_blank" href="https://www.linkedin.com/company/usegrow/"><Image src={linkedIn} alt="linkedin" className='mx-[25px]' /></a>
                                <a target="_blank" href="https://web.facebook.com/usegrow/"><Image src={facebook} alt="facebook" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-6'>
                    <h1 className='font-bold text-accentGreen text-[22px] leading-[28px] mb-[18px]'>Company</h1>
                    <p className='font-normal text-[16px] leading-[24px] hover:text-accentGreen'><Link href='#about'>Who we are</Link></p>
                    <p className='font-normal text-[16px] leading-[24px] my-[6px] hover:text-accentGreen'><Link href='#about'>Our Vision</Link></p>
                    <p className='font-normal text-[16px] leading-[24px] hover:text-accentGreen'><Link href='#about'>Our Mission</Link></p>
                </div>
                <div className='pb-6'>
                    <h1 className='font-bold text-accentGreen text-[22px] leading-[28px] mb-[18px]'>Resource</h1>
                    <p className='font-normal text-[16px] leading-[24px] hover:text-accentGreen'><Link href=''>FAQs</Link></p>
                    <p className='font-normal text-[16px] leading-[24px] my-[6px] hover:text-accentGreen'><Link href=''>Support</Link></p>
                    <p className='font-normal text-[16px] leading-[24px] hover:text-accentGreen'><Link href=''>Community</Link></p>
                </div>
                <div className='pb-6'>
                    <h1 className='font-bold text-accentGreen text-[22px] leading-[28px] mb-[18px]'>Legal</h1>
                    {/* <p className='font-normal text-[16px] leading-[24px] my-[6px] hover:text-accentGreen'><Link href='/TermsAndConditions' >Terms of service</Link></p>
                    <p className='font-normal text-[16px] leading-[24px] hover:text-accentGreen'><Link href='/PrivacyPolicy' >Privacy policy</Link></p> */}
                </div>
            </div>
            <div className='text-center text-white'>
                <p>grow 2022. All Rights Reserved. </p>
            </div>
        </footer>
    )
}

export default Footer