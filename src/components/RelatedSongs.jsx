import SongBar from './SongBar';


const RelatedSongs = ( {data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick}) => (
  <div className='mt-6 w-full flex flex-col'>
    {
         <SongBar
         key={`${artistId}-${song.key}-${i}`}
         song={song}
         i={i}
         artistId={artistId}
         isPlaying={isPlaying}
         activeSong={activeSong}
         handlePauseClick={handlePauseClick}
         handlePlayClick={handlePlayClick}
       />

    }

  </div>


);

export default RelatedSongs;
