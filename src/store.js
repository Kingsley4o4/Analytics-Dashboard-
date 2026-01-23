import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { activityApi } from "./Service/activityApi"
import { imgApi } from "./Service/imgApi";

export const store = configureStore ({
    reducer : {
        [activityApi.reducerPath]:activityApi.reducer,
         [imgApi.reducerPath]: imgApi.reducer,
    
    },

    

    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(activityApi.middleware).concat(imgApi.middleware),


    //     reducer : {
    //     [imgApi.reducerPath]:imgApi.reducer,
    // },

    //   middleware:(getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(imgApi.middleware),

  

});

setupListeners(store.dispatch);

