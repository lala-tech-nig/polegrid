import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Admin = () => {
  const [toggle, setToggle] = useState(false);

  function Toggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleSize = () => {
    if(window.innerWidth > 768) {
      setToggle(false);
    }
}
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  
  }, []) 

  return (
    <div className="d-flex">
    <div className={toggle ? "d-none" : "w-auto position-fixed"} >
    <Sidebar />
    </div>

    <div className= {toggle ? "d-none" : "invisible"} >
    <Sidebar />
    </div>
    
      <div className='col'>
      <Navbar Toggle={Toggle}/>
      </div>
    </div>
  )
}

export default Admin
