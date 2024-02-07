import React from 'react'

const Timer = () => {

  const shortBreak = ()=>{
   
  }

  return (
    <div className='timer'>
       <div className='btn-container'>
       <button><div className='btnContent active'>Promodoro</div></button>
       <button onClick={shortBreak}><div className='btnContent'>Short Break</div></button>
       <button><div className='btnContent'>Long Break</div></button>
       </div>
       <h1 className='promodoroTime'>25:00</h1>
       <button className='startBtn'>START</button>

    </div>
  )
}

export default Timer