import { Link } from "react-router-dom";
const Hero = ({ handleScrollClikToDown }) => (
    <div className="flex flex-col justify-center items-center align-middle">
        <div className="absolute z-[0] w-[30%] h-[35%] left-0 green__gradient" />
        <div className="absolute z-[0] w-[0%] h-[35%] right-0 top-0 blue__gradient" />
        <div className="mt-20 md:mt-36 text-3xl md:text-7xl z-[10] font-extrabold text-center text-gray-800" style={{ fontFamily: 'Urbanist' }}>Fazlalıklarından kurtul,<br /> eksiklerini tamamla: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-sky-600">Takasla</span></div>
        <div className="mt-12 sm:text-xl md:text-2xl z-[10] text-center text-gray-600 mx-5 md:mx-10 lg:mx-40">
            Takasla, ihtiyaç duyduğunuz şeyleri elde etmenin en sürdürülebilir ve ekonomik yolunu sunuyor. Yeni bir ürün almak için para harcamak yerine, kullanmadığınız eşyalarınızı takas ederek diğer kullanıcılara fayda sağlayabilirsiniz.
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
                    <Link to="/auth" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-brand-green/90 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                        <span className="relative text-base font-semibold text-white ">Şimdi Dene</span>
                    </Link>
                    <a href="#" onClick={handleScrollClikToDown} className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-brand-green/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95  sm:w-max">
                        <span className="relative text-base font-semibold text-brand-green ">Takasla Nedir?</span>
                    </a>
                </div>
    </div>
)
export default Hero;