import React from 'react'

const TaskList = () => {
  return (
    <div className='taskList'>
      <button className='taskLength'>#1</button>
      <h3 className='focusTask'>React Öğreniyorum!</h3>

      <div className='contentTitle'>
        <div className='title'><h3 className=''>Tasks</h3></div>
        <div> <button className='optionsTask'><i class='bx bx-menu'></i></button></div>
       
      </div>
      <div className='line'></div>
      <ul>
        <li>
          <div className='iconTaskTitle'><i class='bx bx-check'></i><span>React Öğreniyorum!</span></div>
          <div className='optionsLiContent'><h3>0/1</h3><button className='optionsLi'><i class='bx bx-menu'></i></button></div>
        </li>
      </ul>
      <button className='addTask'><i class='bx bxs-plus-circle'></i>Add Task</button>
      <div className='description'><p>Pomos:<span>0/2</span>Finish At:<span>19:41</span>(09.h)</p></div>
    </div>
  )
}

export default TaskList