import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
// import config from '../Config';

export const fetchImages = createAsyncThunk(
    'Ai_thunk/fetchImages',
    
    

    async (data)=>{

        const configAxios = {
            "headers":{
                "Authorization":"Bearer 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"
            }
        }

        // An async funtion return a promise

        const res = await axios.post('https://api.openai.com/v1/images/generations',data, configAxios);
        return res;
    }
);