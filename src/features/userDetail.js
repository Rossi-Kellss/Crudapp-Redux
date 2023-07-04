import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser=createAsyncThunk("createUser",async (users,{rejectWithValue})=>{
    const response=await fetch("https://64a41173c3b509573b5700e2.mockapi.io/CRUD",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(users)
    })

    try {
        const result=response.json();
        return result
    } catch (error) {
        return(rejectWithValue(error));
        
    }
})

export const userDetails=createSlice({
    name:"user",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [createUser.pending]:(state,action)=>{
            state.loading=false;
            state.users.push(action.payload);
        },
        [createUser.pending]:(state)=>{
            state.loading=true;

        },
        [createUser.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },

    }

})

export default userDetails.reducer;