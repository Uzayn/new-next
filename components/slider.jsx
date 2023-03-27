import Image from "next/image";

import { Component } from "react";
import Slider from "react-slick";

import { Slides } from "@/constants";
import styles from "@/styles/style";

export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        }
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        })
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: false,
            swipeToSlide: false,
            asNavFor: this.Slider
        };
        return (
            <div id="about" className={`${styles.paddingX} ${styles.paddingY} items-center md:flex justify-around`}>
                <div className={`{layout.sectionInfo} md:w-1/2`}>
                    <Slider  {...settings} asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}>
                        {Slides.map((slide) => (
                            <div key={slide.id}>
                                <h1 className='font-extrabold font-MTS text-[45px] text-offBlack leading-[52px] mb-[19px]'>{slide.title}</h1>
                                <p className='font-normal text-grey text-[20px] sm:text-[24px] leading-[36px] w-[fit] h-fit md:w-[486px]'>{slide.content}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className={`{layout.sectionImg} md:w-1/2`}>
                    <Slider {...settings} asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}>
                        {Slides.map((slide) => (
                            <div key={slide.id}>
                                <Image src={slide.img} alt="" className=' w-fit ' />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}