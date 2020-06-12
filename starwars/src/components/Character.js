// Write your Character component here
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Character(){
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character/1,183')
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {console.log('Error',err)})

    },[])

    return (
    <div className='character'>
        Test
    </div>)
}

export default Character;