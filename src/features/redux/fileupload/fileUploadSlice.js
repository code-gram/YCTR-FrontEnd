import { createSlice } from "@reduxjs/toolkit";
import {fetchUploadFileData} from "./fileUploadAction";
import {uploadFileData} from "./fileUploadAction";


const initialState = {
  loading: false,
  error: null,
  fileupload: [],
  updatefile:null
};
const fileUploadSlice = createSlice({
  name: "fileupload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
    builder.addCase(fetchUploadFileData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUploadFileData.fulfilled, (state, action) => {
      state.loading = false;
      state.fileupload = action.payload;
      state.success = true;
    });
    builder.addCase(fetchUploadFileData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(uploadFileData.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(uploadFileData.fulfilled, (state, action) => {
        state.loading = false;
        state.updatefile = action.payload;
        state.success = true;
       
      });
      builder.addCase(uploadFileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


  },
});
export default fileUploadSlice.reducer;