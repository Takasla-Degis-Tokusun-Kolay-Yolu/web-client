import logo from '../../assets/images/logo-top.png'
import { Link } from 'react-router-dom'
const Navbar = () => (
    <nav className='h-20 w-full flex bg-white '>
        <div className='w-11/12 border-b-2 mx-auto'>
            <div className='flex justify-center mt-2'>
                <Link to='/feed'>
                <img src={logo} alt='logo' className='h-14' />
                </Link>
                
            </div>
        </div>
    </nav>
)
export default Navbar