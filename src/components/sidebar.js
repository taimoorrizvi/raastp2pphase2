import React from 'react';
import { useHistory } from 'react-router-dom';


function Sidebar() {

    let history = useHistory ();

    return (
      
        <div class="sidebar h-full fixed top-0">
            <div class="w-full h-auto py-3 flex justify-center sidebar-logo">
                <h1 className='text-xl'>Phase 2</h1>
                {/* <img className='w-24 h-auto' src="logo/glean-logo-md.png" alt="Glean logo" /> */}
            </div>
            <ul class='w-full flex flex-col'>
                <a onClick={()=>history.push('/')} class='sidebar-items cursor-pointer'>
                    <li class='w-full flex flex-row items-center p-4'>
                        <i class="fas fa-tachometer-alt mr-5"></i>
                        <p class='text-base sidebar-anchors'>Dashbaord</p>
                    </li>
                </a>
                <a onClick={()=>history.push("/send")} class='sidebar-items cursor-pointer'>
                    <li class='w-full flex flex-row items-center p-4'>
                        <i class="fas fa-share-square mr-5"></i>
                        <p class='text-base sidebar-anchors'>Sent</p>
                    </li>
                </a>
                <a onClick={()=>history.push("/recieve")} class='sidebar-items cursor-pointer'>
                    <li class='w-full flex flex-row items-center p-4'>
                        <i class="fas fa-inbox mr-5"></i>
                        <p class='text-base sidebar-anchors'>Recieved</p>
                    </li>
                </a>
                {/* <a onClick={()=>history.push("/custom")} class='sidebar-items cursor-pointer'>
                    <li class='w-full flex flex-row items-center p-4'>
                        <i class="fas fa-scroll mr-5"></i>
                        <p class='text-base sidebar-anchors'>Custom Requests</p>
                    </li>
                </a>
                <a onClick={()=>history.push("/my_requests")} class='sidebar-items cursor-pointer'>
                    <li class='w-full flex flex-row items-center p-4'>
                        <i class="fas fa-archive mr-5"></i>
                        <p class='text-base sidebar-anchors'>My Requests</p>
                    </li>
                </a> */}
            </ul>
        </div>

    );
  }
  
export default Sidebar;