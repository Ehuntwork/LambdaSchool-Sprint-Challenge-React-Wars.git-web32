// Write your Character component here
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Character from './Character'

function CharactersPage(){
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,20,30,107,220,234')
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {console.log('Error',err)})

    },[])

    return (
    <div className='charactersPage'>
        {data.map((characterData)=>{
            return <Character character = {characterData}/>
        })}
    </div>)
}

export default CharactersPage;