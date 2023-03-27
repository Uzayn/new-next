import Image from "next/image";

import { useState } from "react";

const FeaturesCard = ({ content, title, img, subTitle, hoverImg }) => {

    const [Fimg, setHoverImg] = useState(img)


    return (
        <div className={`text-center md:w-[300px] h-[400px] text-offBlack hover:text-white border border-accentGreen rounded-[8px] bg-aWhite hover:bg-greenGrow`}>
            <div className='flex justify-center mt-[70px] mb-[50px]'>
                <Image src={Fimg} alt="" className='w-[50px]' />
            </div>
            <div className='px-[15px] text-center'>
                <h1 className='font-extrabold font-MTS text-[23.5px] leading-[28.04px] mb-[5px]'>{title}</h1>
                <h1 className='font-medium font-MTS text-[23.5px] leading-[28.04px] mb-[14.46px]'>{subTitle}</h1>
                <p className='font-normal text-[14.46px] leading-[21.69px] '>{content}</p>
            </div>
        </div>
    )
}

export default FeaturesCard;