import {Error,Loader,SongCard} from '../components';
import {genres} from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamcore';
import { useDispatch,useSelector } from 'react-redux';



const Discover = () => {
// const dispatch = useDispatch();
// const{activeSong }=useSelector((state)=>state.palyer);


const{data,isFetching,error}=useGetTopChartsQuery();
const genreTitle='pop';
console.log(data);


    console.log(genres);

    if(isFetching) return <Loader title="Loading songs..."/>;
    if(error) return <Error/>;



return (
<div className='flex flex-col'>
    Discover
    <div className='w-full flex justify-between items-center
    sm:flex-row flex-col mt-4 mb-10'>
        <select 
        onChange={()=>{}}
        value=""
        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
            {genres.map((genre)=><option key={genre.value}
            value={genre.value}>{genre.title}</option>)}
         
        </select>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {[1,2,3,4,5,6,7,8,9,10].map((song,i)=>(
                <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                />
            ))}
            
        </div>


    </div>
</div>

);

}


export default Discover;
