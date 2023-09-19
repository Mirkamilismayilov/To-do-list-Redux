import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addId, inputValue, todosMap } from "../features/counterSlice";

const Todo = () => {
  let obj = useSelector((state) => state.counterX);

  const dispatch = useDispatch();

  const submit = (e) => {
e.preventDefault();

    if(obj.todo.trim() === ""){

    }else{
      
    dispatch(addId());
    dispatch(todosMap())
    dispatch(inputValue(""));
    }


    
  };





  return (
    <div className="bg-white w-[200px] h-[200px] flex justify-center items-center ">
      <form
        className="flex justify-center  gap-5 items-center flex-col"
        onSubmit={submit}
      >
        <input
          onChange={(e) => dispatch(inputValue(e.target.value))}
          value={obj.todo}
          className="border-2 "
          type="text"
        />

        <button className="bg-red-500 p-2 rounded-xl ">Add+</button>
      </form>
    </div>
  );
};

export default Todo;
