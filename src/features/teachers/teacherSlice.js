import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios';


export const fetchTeachers= createAsyncThunk('teachers/fetchTeachers', async()=>{
  const response = await axios.get ( 'https://studentmanagement.anushkajaiswal7.repl.co/teachers');
  console.log(response?.data?.data)
  return response?.data?.data
})

export const addteacherData = createAsyncThunk('teachers/addteacherData', async(teacherData)=>{
  const response = await axios.post('https://studentmanagement.anushkajaiswal7.repl.co/teachers',
  teacherData
  )
  return response.data.data
})

export const deleteteacherData = createAsyncThunk('teachers/deleteteacherData', async(teacherId)=>{
   const response= await axios.delete(`https://studentmanagement.anushkajaiswal7.repl.co/teachers/${teacherId}`);
   return response.data.data;
})
export const updateTeacherData = createAsyncThunk('teachers/updateTeacherData', async(payload)=>{
  const {id, formData:teacherData} = payload
  const response = await axios.put(`https://studentmanagement.anushkajaiswal7.repl.co/teachers/${id}`,
  teacherData
  )
  return response.data.data
})
export const teacherSlice = createSlice({
  name:'teachers',
  initialState:{
    teachers:[],
    error:null,
    status:'idle'
  },
  reducers:{
     
  },
  extraReducers:{
    [fetchTeachers.fulfilled]:(state, action)=>{
      state.teachers = action.payload;
      state.status = "success";
    },
    [fetchTeachers.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [fetchTeachers.pending]: (state) => {
      state.status = "loading";
    },
    [addteacherData.fulfilled]:(state, action)=>{
      state.teachers = [action.payload, ...state.teachers];
      state.status = "success";
    },
    [addteacherData.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [addteacherData.pending]: (state) => {
      state.status = "loading";
    },
    [deleteteacherData.fulfilled]:(state, action)=>{
      state.teachers = action.payload;
      state.status = "success";
    },
    [deleteteacherData.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [deleteteacherData.pending]: (state) => {
      state.status = "loading";
    },
    [updateTeacherData.fulfilled]:(state, action)=>{
      state.teachers = action.payload;
      state.status = "success";
    },
    [updateTeacherData.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [updateTeacherData.pending]: (state) => {
      state.status = "loading";
    }
  }
})
// export const { dd } = postSlice.actions;
export default teacherSlice.reducer;