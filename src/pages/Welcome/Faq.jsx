import Question from "../../assets/images/question.svg";
const Faq = () => {
  return (
    <>
      <div className="mt-20" style={{ fontFamily: "Urbanist" }}>
        <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800">
          Aklına takılan bir şey mi var?
        </h1>
        <div className="divide-y space-y-6 divide-gray-100 lg:mx-40">
          <div className="mt-8 flex gap-4 md:items-center px-10 ">
            <div className='w-12 h-12 flex gap-4 rounded-full bg-indigo-100 "'>
              <img src={Question} alt="pie" className="p-2" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg text-gray-700 ">
                Takasla nedir?
              </h3>
              <p className="text-gray-500 ">
                Takasla, kullanıcıların kullanmadıkları eşyaları başkalarının
                ihtiyaçları için takas etmelerine olanak tanıyan bir takas
                platformudur.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4 md:items-center px-10">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100">
              <img src={Question} alt="pie" className="p-2" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg text-gray-700 ">
                Takas yapmak için nasıl kayıt olabilirim?
              </h3>
              <p className="text-gray-500 ">
                Takasla platformuna kayıt olmak ücretsizdir. Ana sayfada bulunan
                "Kayıt Ol" düğmesine tıklayarak adınızı, e-posta adresinizi ve
                şifrenizi girmeniz yeterlidir.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4 md:items-center px-10 ">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 ">
              <img src={Question} alt="pie" className="p-2" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg text-gray-700 ">
                Takas yapmak için ne yapmam gerekiyor?
              </h3>
              <p className="text-gray-500 ">
                Takas yapmak için, "Takas Et" düğmesine tıklayarak takas etmek
                istediğiniz eşyanın fotoğrafını yükleyin ve açıklama ekleyin.
                Ardından, takas etmek istediğiniz eşyaların listesini gözden
                geçirin ve uygun olanları seçin. Takas teklifi kabul edildikten
                sonra, eşyaların takası gerçekleştirilebilir.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4 md:items-center px-10 ">
            <div className='w-12 h-12 flex gap-4 rounded-full bg-indigo-100 "'>
              <img src={Question} alt="pie" className="p-2" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg text-gray-700 ">
                Takasla üzerinden hangi tür eşyalar takas edilebilir?
              </h3>
              <p className="text-gray-500 ">
                Takasla üzerinden birçok farklı türde eşya takas edilebilir.
                Giysi, kitap, ev eşyası, elektronik cihazlar ve daha birçok şey
                takas edilebilir.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4 md:items-center px-10 ">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 ">
              <img src={Question} alt="pie" className="p-2" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg text-gray-700 ">
                Takas teklifim kabul edilmezse ne yapabilirim?
              </h3>
              <p className="text-gray-500 ">
                Takas teklifiniz kabul edilmezse, farklı bir takas teklifi
                yapabilirsiniz. Ayrıca, eşyanızın takas edilmesini sağlamak için
                takas özelliklerini geliştirebilirsiniz.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4 md:items-center px-10 ">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 ">
              <img src={Question} alt="pie" className="p-2" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg text-gray-700 ">
                Takas ettiğim eşyaları nasıl gönderirim veya teslim alırım?
              </h3>
              <p className="text-gray-500 ">
                Takas ettiğiniz eşyaları göndermek veya teslim almak size ve
                takas partnerinize bağlıdır. Genellikle, eşyaların gönderilmesi
                veya teslim edilmesi için kargo veya yerel teslimat hizmetleri
                kullanılır.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4 md:items-center px-10 ">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 ">
              <img src={Question} alt="pie" className="p-2" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg text-gray-700 ">
                Takas yapmak için herhangi bir ücret ödemem gerekiyor mu?
              </h3>
              <p className="text-gray-500 ">
                Hayır, takasla platformunda takas yapmak tamamen ücretsizdir.
                Ancak, kargo veya teslimat hizmetleri için ayrıca ücretler
                ödemek gerekebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
