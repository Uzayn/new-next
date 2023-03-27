import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { logo, menu, close } from "@/assets";
import { navLinks } from "@/constants";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex justify-between items-center h-[86px]'>
            <Link className='' href="/">
                <Image src={logo} alt="Grow Logo" className='w-[86.4px] md:w-[111.5px] h-[32px] md:h-[41.03px] ' />
            </Link>
            <div className='sm:flex hidden'>
                <ul className='list-none flex flex-1 py-[31px] text-greenGrow font-medium text-[18px] leading-6'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`${index === navLinks.length - 1 ? '' : 'mr-[40px]'}`}>
                            <Link href={nav.id}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sm:hidden flex flex-1 justify-end items-center overflow-hidden">
                <Image src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

                <div className={`${toggle ? "flex" : "hidden"} p-6 bg-greenGrow absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar overflow-hidden `}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-SPD font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4  '}`} >
                                <Link href={nav.id}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar