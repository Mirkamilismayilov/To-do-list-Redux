/* eslint-disable no-unused-vars */

import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";


export default  configureStore  ({
    
    reducer:{
        counterX:counterSlice
    }

})