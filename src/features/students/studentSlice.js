import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios';


export const fetchStudents= createAsyncThunk('students/fetchStudents', async()=>{
  const response = await axios.get ( 'https://studentmanagement.anushkajaiswal7.repl.co/student');
 
  return response?.data?.data
})

export const addStudentData = createAsyncThunk('students/addStudentData', async(studentData)=>{
  console.log({studentData})
  const response = await axios.post('https://studentmanagement.anushkajaiswal7.repl.co/student',
  studentData
  )
  return response.data.data
})

export const deleteStudentData = createAsyncThunk('students/deleteStudentData', async(studentId)=>{
   const response= await axios.delete(`https://studentmanagement.anushkajaiswal7.repl.co/student/${studentId}`);
   return response.data.data;
})
export const updateStudent = createAsyncThunk('students/updateStudent',async( payload)=>{
  const { id, formData } = payload;
  const response = await axios.post(`https://studentmanagement.anushkajaiswal7.repl.co/student/${id}`,
  formData
  )
  return response.data.data
})
export const studentSlice = createSlice({
  name:'students',
  initialState:{
    students:[],
    error:null,
    status:'idle'
  },
  reducers:{
     
  },

  extraReducers:{
    [fetchStudents.fulfilled]:(state, action)=>{
      state.students = action.payload;
      state.status = "success"
    },
    [fetchStudents.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [fetchStudents.pending]: (state) => {
      state.status = "loading";
    },
    [addStudentData.fulfilled]:(state, action)=>{
      state.students = [action.payload, ...state.students];
      state.status = "success"
    },
    [addStudentData.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [addStudentData.pending]: (state) => {
      state.status = "loading";
    },
    [deleteStudentData.fulfilled]:(state, action)=>{
      state.students = action.payload;
      state.status = "success"
    },
    [deleteStudentData.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [deleteStudentData.pending]: (state) => {
      state.status = "loading";
    },
    [updateStudent.fulfilled]:(state, action)=>{
      state.students = action.payload;
      state.status = "success"
    },
    [updateStudent.rejected]:(state, action)=>{
      state.error = action.payload;
    },
    [updateStudent.pending]: (state) => {
      state.status = "loading";
    }
  }
})
// export const { dd } = postSlice.actions;
export default studentSlice.reducer;