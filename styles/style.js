export const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    paddingX: "px-6 lg:px-[120px]",
    paddingY: "py-[40px] md:py-[70px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
};

export const layout = {
    section: `flex md:flex-row flex-col`,
    sectionReverse: `flex md:flex-row flex-col-reverse`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sectionInfo2: `flex ${styles.flexCenter} flex-row`,
};
export default styles

// sectionImgReverse flex-1 flex flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10
// sectionImg flex-1 flex flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10

// sectionInfo flex-1 flex justify-center items-start flex-col
// sectionInfo2 flex flex justify-center items-center flex-row