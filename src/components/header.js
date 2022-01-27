import React from 'react';
import { useHistory } from 'react-router-dom';

function Header( props ) {

    let history = useHistory ();
    const [showLogout, setShowLogout] = React.useState(false);
    const {page} = props;

    return (

        <header class='header w-full'>
            <nav class='w-full px-8 py-3 nav flex flex-row justify-between items-center'>
                <a onClick={()=>history.push('/')} className='cursor-pointer'><p class='text-lg text-gray-400 mb-0'>Home</p></a>
                <div onClick={()=>setShowLogout(!showLogout)} className='flex flex-row cursor-pointer'>
                    <i class="fas fa-user-circle text-2xl"></i>
                    <p className='ml-2 text-lg text-blue'>s.naqvi</p>
                </div>
                { showLogout ? <div class='absolute w-40 h-auto bg-white account shadow-lg slideDown'>
                    <div class='w-full pl-4 py-3 bg-gray'>
                        <p class='font-semibold'>Account</p>
                    </div>
                    <div class='pl-4 py-4 bg-white'>
                        <a href="/login">
                            <div class='flex flex-row items-center'>
                                <i class="fas fa-sign-out-alt text-sm mr-2"></i>
                                <p>Log out</p>
                            </div>
                            </a>
                    </div>
                </div> : null}
            </nav>
            <div class='w-full px-8 py-3 flex flex-row justify-between items-center'>
                <p class='text-lg mb-0 text-blue'>{page}</p>
            </div>
        </header>   

    );
  }
  
export default Header;