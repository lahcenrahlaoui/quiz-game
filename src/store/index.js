import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { quizApi } from "./api/quizApi";

export const store = configureStore({
    reducer: {
        [quizApi.reducerPath]: quizApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(quizApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchQuizQuery } from "./api/quizApi";
