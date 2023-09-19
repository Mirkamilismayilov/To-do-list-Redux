import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allDelete } from '../features/counterSlice'

const ListCount = () => {
    let obj = useSelector((state)=>state.counterX)
    const dispatch = useDispatch()
  return (
    <div className='flex bg-red-400  justify-between mt-5 items-center w-full p-3'>
 <div className='flex justify-center items-center gap-10'>
       <div className="">List:{obj.list}</div>
      <div className="">Completed: {obj.completedCount}</div>
 </div>
   
      <div>
        <button onClick={()=>dispatch(allDelete())} className="bg-sky-800 text-white p-3 rounded-xl">AllDelete</button>
      </div>
      
    </div>
  )
}

export default ListCount
