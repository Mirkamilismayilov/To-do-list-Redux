import React from 'react'
import Todos from './Todos'
import ListCount from './ListCount'

const Main = () => {
  return (
    <div className='w-[40%] h-[300px] bg-orange-300'>
      <Todos/>
      <ListCount/>
    </div>
  )
}

export default Main
