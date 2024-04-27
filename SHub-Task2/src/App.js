import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import networkingGIF from "./images/networking.gif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const images = [
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png",
    "https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png",
];
function App() {
    return (
        <div className="App">
            <section className="w-full flex flex-col justify-center items-center mt-[10px] px-[120px]">
                <div className="w-[66%] flex flex-col justify-center items-center mb-[30px]">
                    <img
                        className="h-[56px] w-[56px]"
                        src={networkingGIF}
                        alt="logo"
                    />
                    <p className="mt-4 mb-6 text-center font-semibold text-[32px] leading-[44px] tracking-[.1px]">
                        Hoạt động tiêu biểu từ cộng đồng giáo dục
                    </p>
                    <p className="text-[20px] leading-[32px] tracking-[.1px] font-normal">
                        Hình ảnh được chính những giáo viên từ khắp 3 miền ghi
                        lại trong quá trình giảng dạy, dạy học ứng dụng công
                        nghệ SHub Classroom.
                    </p>
                </div>
                <div className="w-full h-full relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        slidesPerView={6}
                        spaceBetween={10}
                        className="mySwiper h-full w-full"
                        loop={true}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className="pt-[30px]">
                                <img
                                    className={`rounded-[16px] object-cover ${
                                        index % 2 === 0
                                            ? "translate-y-[-30px]"
                                            : ""
                                    }`}
                                    src={image}
                                    alt="ImageSlide"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
}

export default App;
