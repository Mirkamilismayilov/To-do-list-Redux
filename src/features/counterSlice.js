/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        todo:"",
        todos:[],
        allValue:{},
        list:0,
        completedCount:0
    },

    reducers:{
    inputValue:(state,action)=>{
        state.todo = action.payload
    },
       todosMap:(state,action)=>{
        state.todos = [...state.todos,state.allValue]
        state.list++
    },
  
    addId:(state,action)=>{
        state.allValue = {
            id: Math.floor(Math.random() * 1000),
            value: state.todo,
            completed: false,
        }
    },
    todoDelete:(state,action)=>{
        state.todos = state.todos.filter(filt => filt.id !== action.payload)
        state.list--
    },
    todoCompleted:(state,action)=>{
        state.todos = state.todos.map((map) => {
            if (map.id === action.payload) {
                map.completed = !map.completed
            }
            
            return map
            
        })
       
                   
        
    },
    allDelete:(state,action)=>{
       state.todos=[]
       state.list=0

      
    }
    // completedCountFunc:(state,action)=>{
    //     state.todos = state.todos.map((map) => {
    //         if(map.completed === true){
    //             state.completedCount++
    //         }else{
    //             state.completedCount--
    //         }
    //         return map
    //     })
        
    // }
 

    }
})

export const { inputValue,todosMap,addId,todoDelete, todoCompleted,completedCountFunc,allDelete} = counterSlice.actions
export default counterSlice.reducer