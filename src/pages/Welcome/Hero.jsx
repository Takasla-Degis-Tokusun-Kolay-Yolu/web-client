const Hero = () => (
    <div className="flex flex-col justify-center items-center align-middle ">
        <div className="absolute z-[0] w-[30%] h-[35%] left-0 green__gradient" />
        <div className="absolute z-[0] w-[0%] h-[35%] right-0 top-0 blue__gradient" />
        <div class="text-7xl z-[10] font-extrabold text-center text-gray-800" style={{ fontFamily: 'Urbanist' }}>Fazlalıklarından kurtul,<br /> eksiklerini tamamla: <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-sky-600">Takasla</span></div>
        <div className="text-2xl z-[10] text-center text-gray-600 md:mx-40">
            Takasla, ihtiyaç duyduğunuz şeyleri elde etmenin en sürdürülebilir ve ekonomik yolunu sunuyor. Yeni bir ürün almak için para harcamak yerine, kullanmadığınız eşyalarınızı takas ederek diğer kullanıcılara fayda sağlayabilirsiniz.
        </div>
    
            <button className="px-6 py-4 bg-gradient-to-r to-brand-green/75 from-sky-600/75 rounded-2xl text-white mt-10">Şimdi Dene</button>
       
    </div>
)
export default Hero;