import { useState } from 'react';
import { Link } from 'react-router-dom';
import './admin.css';
// import UserProfile from './UsersAdmin/UserProfile';

const sidebar = () => {
    const [active, setActive] = useState(1);
    

  return (
    <div className=' sidebar sidebarMobile d-flex justify-content-between flex-column  py-3 ps-3 pe-5 text-white  vh-100'>
    <div>
      <a href='' className='text-white p-3 '>
      <i className='bi bi-code-slash text-white'></i>
      <span className='sidebarAdmin_str'>Daytopia Admin Panel </span>
      </a>
      <hr className="text-white mt-2" />
      <ul className='nav nav-pills flex-column mt-3'>

      {/* <Link to='/admin'>
      <li className={active ===1 ? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2  mb-2 pb-3" } onClick={() => setActive(1)}>
       
      <span className='sidebarspan_s p-3'>
       <i className='bi bi-people  me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Users</strong></span>
      </span>
     
      </li>
       </Link> */}

      <Link to='/admin/blog'>
      <li className={active ===2 ? 'active nav-item pt-2 pb-3 mb-2' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(2)}>
       
      <span className='sidebarspan_s p-3'>
       <i className="bi bi-substack  me-3 sidebarspan_i sidebarAdmin_str"></i>
       <span><strong className='sidebarAdmin_str'>Blog</strong></span>
      </span>
     
      </li>
       </Link>
      
       {/* <Link to='/admin/news'>
      <li className={active ===3 ? 'active nav-item pt-2 pb-3 mb-2' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(3)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-newspaper me-3 sidebarspan_i sidebarAdmin_str'></i> 
       <span><strong className='sidebarAdmin_str'>News</strong></span>
      </span>
      </li>
      </Link> */}
      
      {/* <Link to='/admin/sucessstories'>
      <li className={active ===4 ? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(4)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-optical-audio me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>SucessStories</strong></span>
      </span>
      </li>
      </Link> */}
      
      {/* <Link to='/admin/job'>
      <li className={active ===5 ? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(5)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-person-workspace me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Job</strong></span>
      </span>
      </li>
      </Link> */}
     
      {/* <Link to='/admin/gallery'>
      <li className={active ===6? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(6)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-images me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Gallery</strong></span>
      </span>
      </li>
      </Link> */}

      {/* <Link to='/admin/books'>
      <li className={active ===7? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(7)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-book me-3 sidebarspan_i  sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Books</strong></span>
      </span>
      </li>
      </Link> */}

      {/* <Link to='/admin/newsletter'>
      <li className={active ===8? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(8)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-grid me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Newsletters</strong></span>
      </span>
      </li>
      </Link> */}

      {/* <Link to='/admin/auth/create-mentor'>
      <li className={active ===9? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(9)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-grid me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Create Mentors</strong></span>
      </span>
      </li>
      </Link> */}

      {/* <Link to='/admin/mentee-data'>
      <li className={active ===10? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(10)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-grid me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Mentees Data</strong></span>
      </span>
      </li>
      </Link> */}

      {/* <Link to='/admin/mentor-data'>
      <li className={active ===11? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(11)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-grid me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Mentors Data</strong></span>
      </span>
      </li>
      </Link> */}

      {/* <Link to='/admin/carrer-post'>
      <li className={active ===12? 'active nav-item pt-2 mb-2 pb-3 ' :  "nav-item pt-2 mb-2 pb-3" } onClick={() => setActive(12)}>
       <span className='sidebarspan_s p-3'>
       <i className='bi bi-grid me-3 sidebarspan_i sidebarAdmin_str'></i>
       <span><strong className='sidebarAdmin_str'>Carrer Post</strong></span>
      </span>
      </li>
      </Link> */}
      </ul>
    </div>

{/*   <UserProfile />  */}
    </div>
  )
}

export default sidebar
