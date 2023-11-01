import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '4e3e4f2640mshd290b4df818e15ep137abfjsnd19272ecc728',
//       'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath :'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-api7.p.rapidapi.com',
        prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key','4e3e4f2640mshd290b4df818e15ep137abfjsnd19272ecc728');
       return headers;
    },
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query:()=>'/charts/worldcharts/get-top-songs-in-world'}),
        getSongDetails:builder.query({query:(songid)=>`/tracks/details?track_id=${songid}`}),
        getSongRelated:builder.query({query:({songid})=>`/tracks/related?track_id=${songid}`}),
    }),
});

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery
}=shazamCoreApi;