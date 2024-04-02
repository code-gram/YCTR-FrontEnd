import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUploadFileData = createAsyncThunk(
  "uploadfile/fetchUploadFileData",

  async (formData, { rejectWithValue }) => {
  
    try {
     const response= await axios.get("http://localhost:8080/training-ctr");
     return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);



export const fetchDataByYear = createAsyncThunk(
  "uploadfile/fetchDataByYear",

  async (year, { rejectWithValue }) => {
  
    try {
     const response= await axios.get("http://localhost:8080/training-ctr/"+year);
     return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);



export const uploadFileData = createAsyncThunk(
    "uploadfile/uploadFileData",
  
    async (formData, { rejectWithValue }) => {
    
      try {
       await axios.post("http://localhost:8080/training-ctr/upload",formData);
      } catch (error) {
        console.log("error",error);
        if (error.response) {
          return rejectWithValue(error.response);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );

