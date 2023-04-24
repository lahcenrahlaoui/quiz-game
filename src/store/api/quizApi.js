import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
    reducerPath: "quiz",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://the-trivia-api.com/v2/questions",
    }),
    endpoints(builder) {
        return {
            fetchQuiz: builder.query({
                query: (category) => {
                    return {
                        url: "",
                        method: "GET",
                    };
                },
            }),
        };
    },
});

export const { useFetchQuizQuery } = quizApi;
