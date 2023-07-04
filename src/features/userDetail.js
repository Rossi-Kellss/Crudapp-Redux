import { createSlice } from "@reduxjs/toolkit";

export const userDetails=createSlice({
    name:"user",
    initialState:{
        users:[],
        loading:false,
        error:null
    }

})

export default userDetails.reducer;