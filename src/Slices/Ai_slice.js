import { createSlice } from '@reduxjs/toolkit'
import 'antd/dist/reset.css';
import {fetchImages} from '../Thunks/Ai_thunk'


const initialState = {
  images: [],
}

export const AiSlice = createSlice({
  name: 'AiSlice',
  initialState,
  reducers: {

  },

  extraReducers : (builder)=>{

    builder.addCase(fetchImages.fulfilled,(state, action)=>{

      // console.log(action.payload);
      state.images = action.payload.data.data
    } );

    builder.addCase(fetchImages.pending,(state, action)=>{

      
    } );

    builder.addCase(fetchImages.rejected,(state, action)=>{

      // console.log(action.payload);
    } )

  }
});


export default AiSlice.reducer