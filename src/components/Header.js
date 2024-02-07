import React from 'react'

const Header = () => {
  return (
    <div>

<header className='header'>
  <div className='content'>
  <h3 className='logo'>Logo<span>TIMER</span></h3>
  <div className='btn-container'>
    <button><div className='btnContent'>
    <i class='bx bxs-report'></i><span>Report</span></div></button>
    <button><div className='btnContent'>
    <i class='bx bx-cog'></i><span>Setting</span></div></button>
    <button><div className='btnContent'>
    <i class='bx bxs-user-circle' ></i><span>Login</span></div></button>
  </div>
  </div>
  <div className='timerline'></div>
</header>

    </div>
  )
}

export default Header