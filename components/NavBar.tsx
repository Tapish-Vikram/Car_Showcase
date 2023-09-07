import link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
    return (
       <header className='w-fu;; absolute z-10'>NavBar
       <nav className='max-w-[1440px] mx-auto flex
       justify-between items-center sm:px-16 px-6 py-4'>
        <link href='/' className='flex justify-centre
        items-centre'>
            <Image
            src="/logo.svg"
            alt='Car Hub Logo'
            width={118}
            height={18}
            className='object-contain'
            />
        </link>
        <CustomButton
        title='sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-
        full bg-white min-w-[130px]'
        />

       </nav>
       </header>
    )
}

export default Navbar