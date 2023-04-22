import Avatar from "../../assets/images/avatar-2.webp";
import { Link } from "react-router-dom";
const Join = () => (
  <>
    <div className="absolute z-[10] w-[40%] h-[20%] right-0  green__gradient" />
    <div className="absolute z-[10] w-[0%] h-[35%] right-0 bottom-0 blue__gradient" />
    <div className="relative mt-20 pb-20" style={{ fontFamily: "Urbanist" }}>
      <div className="flex items-center justify-center -space-x-2">
        <img
          loading="lazy"
          width="400"
          height="400"
          src={Avatar}
          alt="member photo"
          className="h-8 w-8 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width="200"
          height="200"
          src={Avatar}
          alt="member photo"
          className="h-12 w-12 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width="200"
          height="200"
          src={Avatar}
          alt="member photo"
          className="z-10 h-16 w-16 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width="200"
          height="200"
          src={Avatar}
          alt="member photo"
          className="relative h-12 w-12 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width="200"
          height="200"
          src={Avatar}
          alt="member photo"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
      <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h1 className="text-center text-2xl font-bold text-gray-800  md:text-5xl">
          Deneyimlemek İster Misin?
        </h1>
        <p className="text-center text-base md:text-xl text-gray-600 ">
          Geniş kullanıcı kitlesine sahip olan Takasla'ya adım atmak ister
          misin? Onlarca farklı kategoride ürünler seni bekliyor.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mx-10 md:mx-0">
          <Link
            to="/auth"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-brand-green/90 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-base font-semibold text-white ">
              Takaslamaya Başla!
            </span>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Join;
