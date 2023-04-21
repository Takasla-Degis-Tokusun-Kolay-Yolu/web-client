import Pie from '../../assets/images/pie.svg';
import Search2 from '../../assets/images/search-2.svg';
import Easy from '../../assets/images/easy.svg';
import Avatar from '../../assets/images/avatar-thinking-2.svg';
const Features = () => (
    <>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-20" style={{ fontFamily: 'Urbanist' }}>
            <img src={Avatar} alt='features' className='w-14' />
            <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
                <div className="md:5/12 lg:w-1/2">
                    <img src={Pie} />
                </div>
                <div className='md:7/12 lg:w-1/2'>
                    <h2 className='text-3xl font-bold text-gray-900 md:text-4xl '>Kolay Kullanım, Hızlı Takas!</h2>
                    <p className='my-8 text-gray-600 '>Takasla ile eşyalarını takas etmek artık çok kolay ve hızlı! Üstelik platformumuzda, ihtiyacın olan eşyaları aramak da son derece basit.</p>
                    <div className='divide-y space-y-4 divide-gray-100 '>
                        <div className='mt-8 flex gap-4 md:items-center'>
                            <div className='w-12 h-12 flex gap-4 rounded-full bg-indigo-100 '>
                                <img src={Easy} alt='pie' className='p-2' />
                            </div>
                            <div className='w-5/6'>
                                <h3 className='font-semibold text-lg text-gray-700 '>Kolay Kullanım</h3>
                                <p className='text-gray-500 '>Kullanıcı dostu arayüzümüz sayesinde, takas işlemlerini kolayca gerçekleştirebilirsin.</p>
                            </div>
                            
                        </div>
                        <div className='pt-4 flex gap-4 md:items-center'>
                            <div className='w-12 h-12 flex gap-4 rounded-full bg-teal-100 '>
                            <img src={Search2} alt='pie' className='p-2' />
                            </div>
                            <div>
                                <h3 className='font-semibold text-lg text-gray-700 '>Güçlü Filtreleme</h3>
                                <p className='text-gray-500 '>Ayrıntılı arama seçeneklerimiz ile ihtiyacın olan eşyaları hızlıca bulabilirsin.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Features;