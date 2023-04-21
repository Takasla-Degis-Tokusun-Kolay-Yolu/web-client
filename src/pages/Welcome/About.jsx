import Avatar from '../../assets/images/avatar-thinking.svg';
import Social from '../../assets/images/social.svg'
import Safe from '../../assets/images/safe.svg'
import Share from '../../assets/images/share.svg'
import Free from '../../assets/images/free.svg'
const About = () => (
    <>
        <div className="flex flex-col w-11/12  lg:w-5/12 justify-center items-start mx-4 md:mx-10 lg:mx-32 align-middle mt-10 md:mt-44" style={{ fontFamily: 'Urbanist' }}>
        <img src={Avatar} alt="what is takasla" className='w-14' />
        <h1  className='text-3xl md:text-3xl lg:text-5xl font-bold text-gray-700 mt-4'>Eşya Takası Artık Çok Kolay!</h1>
        <h3 className='mt-4 text-md text-gray-500'>Eldeki eşyaları yenilemek ya da ihtiyacın olan eşyaları elde etmek için para harcamana gerek yok. Takasla, eşyalarını takas etmenin kolay ve eğlenceli bir yolunu sunuyor. Bu platform sayesinde, kullanmadığın eşyaları takas ederek, yeni eşyaları elde edebilirsin. Üstelik, takas ettiğin eşyalar sayesinde çevreye de katkı sağlayabilirsin. </h3>
    </div>
    <div className='mx-5 md:mx-20 mt-12 grid divide-x divide-y divide-gray-100  overflow-hidden rounded-3xl border border-gray-100 text-gray-600  sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4'>
        <div className='group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
            <img src={Social} alt="what is takasla" className='w-14' />
            <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-gray-700 transition group-hover:text-secondary'>Geniş Kullanıcı Ağı</h5>
                <p className='text-gray-600 '>
                    Takasla'da, tüm Türkiye'den birçok kullanıcı bulunuyor. Bu sayede, aradığın eşyayı daha hızlı ve kolay bir şekilde bulabilirsin.
                </p>
            </div>
            </div>
        </div>

        <div className='group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
            <img src={Safe} alt="what is takasla" className='w-14' />
            <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-gray-700 transition group-hover:text-secondary'>Güvenli Takas</h5>
                <p className='text-gray-600 '>
                Takasla, kullanıcılarının güvenliği için özel önlemler almaktadır. Yapacağın takas işlemleri, güvenli bir şekilde gerçekleşir.
                </p>
            </div>
            </div>
        </div>
        <div className='group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
            <img src={Share} alt="what is takasla" className='w-14' />
            <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-gray-700 transition group-hover:text-secondary'>Sosyal Paylaşım</h5>
                <p className='text-gray-600 '>
                Takasla, sosyal medya hesaplarında kolayca paylaşabileceğin eşya takası ilanlarını destekliyor.
                </p>
            </div>
            </div>
        </div>
        <div className='group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
            <img src={Free} alt="what is takasla" className='w-14' />
            <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-gray-700 transition group-hover:text-secondary'>Tamamen Ücretsiz</h5>
                <p className='text-gray-600 '>
                Takasla'yı tamamen ücretsiz kullanabilirsin. Ücret ödemeden, aradığın eşyayı bulabilir ve takas edebilirsin.
                </p>
            </div>
            </div>
        </div>
    </div>
    
    </>
)

export default About;