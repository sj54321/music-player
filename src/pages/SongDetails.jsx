import { useParams  } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";
const SongDetails = () =>{ 

const dispatch = useDispatch();
const {setActiveSong , isPlaying} = useSelector((state)=>state.player);
const {data:songData , isFetching:isFetchingSongDetails }=
useGetSongDetailsQuery(songid);

const {data,isFetching:isFetchingRelatedSongs,error}=
useGetSongRelatedQuery({songid});

const handlePauseClick =()=>{
  dispatch(playPause(false));
 };
 const handlePlayClick=(song,i)=>{
  dispatch(setActiveSong({song,data,i}));
  dispatch(playPause(true));
 };

const {songid}=useParams();

console.log(songid);

return(

<div className="flex flex-col">
    <div className="mb-10">
      <h2 className="text-white text-3xl font-bold">
         Lyrics:
      </h2>
      <div className="mt-5">
        { songData?.section[1].type==='LYRICS'?songData?.sections[1].text.map((line,i)=>(<p>{line , i}</p>)):<p className="text-gray-400 text-base
          my-1">sorry , no lyrics found</p>}
        </div>
    </div>
    <RelatedSongs
    data={data}
    isPlaying={isPlaying}
    activeSong={activeSong}
    handlePauseClick={handlePauseClick}
    handlePlayClick={handlePlayClick}
    />
     </div>
)
}

export default SongDetails;
