import Avatar from '../../assets/images/avatar-2.webp'
const Join = () => (
    <>
        <div className="absolute z-[10] w-[40%] h-[20%] right-0  green__gradient" />
        <div className="absolute z-[10] w-[0%] h-[35%] right-0 bottom-0 blue__gradient" />
        <div class="relative mt-20 pb-20" style={{ fontFamily: 'Urbanist' }}>
            <div class="flex items-center justify-center -space-x-2">
                <img loading="lazy" width="400" height="400" src={Avatar} alt="member photo" class="h-8 w-8 rounded-full object-cover" />
                <img loading="lazy" width="200" height="200" src={Avatar} alt="member photo" class="h-12 w-12 rounded-full object-cover" />
                <img loading="lazy" width="200" height="200" src={Avatar} alt="member photo" class="z-10 h-16 w-16 rounded-full object-cover" />
                <img loading="lazy" width="200" height="200" src={Avatar} alt="member photo" class="relative h-12 w-12 rounded-full object-cover" />
                <img loading="lazy" width="200" height="200" src={Avatar} alt="member photo" class="h-8 w-8 rounded-full object-cover" />
            </div>
            <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                <h1 class="text-center text-4xl font-bold text-gray-800  md:text-5xl">Deneyimlemek İster Misin?</h1>
                <p class="text-center text-xl text-gray-600 ">
                    Geniş kullanıcı kitlesine sahip olan Takasla'ya adım atmak ister misin? Onlarca farklı kategoride ürünler seni bekliyor.
                </p>
                <div class="flex flex-wrap justify-center gap-6">
                    <a href="#" class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-brand-green/90 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                        <span class="relative text-base font-semibold text-white ">Takaslamaya Başla!</span>
                    </a>
                    
                </div>
            </div>
        </div>
    </>
)

export default Join;