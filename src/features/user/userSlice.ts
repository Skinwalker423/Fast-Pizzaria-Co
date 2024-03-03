import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise<any>(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// export async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }

const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
});

export interface UserState {
  username: string;
  address: string;
  status: "idle" | "loading" | "error" | "success";
  position: {
    latitude: string;
    longitude: string;
  };
  error?: SerializedError;
}

const initialState: UserState = {
  username: "",
  address: "",
  status: "idle",
  position: {
    latitude: "",
    longitude: "",
  },
  error: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAddress.pending, (state) => {
      console.log("pending");
      state.status = "loading";
    });
    builder.addCase(fetchAddress.rejected, (state, action) => {
      console.log("rejected");
      state.status = "error";
      state.error = action.error;
    });
    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.address = action.payload.address;
      state.position = action.payload.position;
      state.status = "success";
    });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
