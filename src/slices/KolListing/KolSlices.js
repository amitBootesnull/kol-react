import { createReducer, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../common/apis";

const initialState = {
 listingDetails :{},
 kolType:'',
 name:'',
 message:''
};

//API Integration with action for registration creation
export const  kolDetails= createAsyncThunk(
  "kol/details",
  async ({id,token },thunkAPI) => {
console.log(id,token);
    try {
      const response = await fetch(`${API}/kol-profile/view?id=${id}`, {
        method: "GET",
       
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token
        },
      });
      let data = await response.json();
      console.log(data);
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//bookmark add api integration
export const  kolAddBookmark = createAsyncThunk(
  "kol/bookmark",
  async ({profileId, token},thunkAPI) => {
console.log("hgjdfhg",profileId,token);
    try {
      const response = await fetch(`${API}/bookmark/add`, {
        method: "Post",
        body: JSON.stringify({
          kol_profile_id:profileId,
       
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token
        },
      
      });
      let data = await response.json();
      console.log(data);
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//create slice for authentication reducers

const kolReducer = createSlice({
  name: "kol",
  initialState,

  reducers: {
    kolType: (action, {payload}) => {
      console.log(payload);
      return {kolType: payload};
    },
    kolName: (action, {payload}) => {
      console.log(payload);
      return {name: payload};
    },
  },
  extraReducers: {
    [kolDetails.fulfilled]: (state, action) => {
      return { listingDetails: { ...action.payload } };
    },
    [kolAddBookmark.fulfilled]: (state, {payload}) => {
      state.message = payload.message
    },
   
  },
});
export const { kolType ,kolName} = kolReducer.actions;
export default kolReducer.reducer;
