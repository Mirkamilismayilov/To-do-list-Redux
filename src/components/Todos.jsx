import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaTrashAlt} from "react-icons/fa"
import {BsPencilFill} from "react-icons/bs"
import {  todoCompleted, todoDelete } from '../features/counterSlice'
const Todos = () => {
    
    let obj = useSelector((state)=>state.counterX)


const dispatch = useDispatch()



console.log(obj.allValue.completed);


    
  return (
    <div className=' flex items-center justify-center '>
        <ul className='w-[80%]  flex items-center  gap-5 flex-col' >
  {
        obj.todos?.map((item,index)=>(
     <li className='bg-gray-400 text-[20px] flex justify-between items-center  w-full p-6' key={index}> 
     
     <p className={item.completed ? "completed" : "" }>{item.value}</p> 
     <div className='flex gap-5'>
        <BsPencilFill onClick={()=>dispatch(todoCompleted(item.id))} />
        
     <FaTrashAlt className='cursor-pointer' onClick={()=> dispatch(todoDelete(item.id)) }/> 
     
     </div>
    
     </li>


        ))
      }

        </ul>
   
    </div>
  )

}

export default Todos
