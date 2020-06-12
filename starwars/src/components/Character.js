// Write your Character component here
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

function Character(props){
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character/1')
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {console.log('Error',err)})

    },[])

    return (
    <div className='character'>
        <Card>
            <CardImg top width="100%" src={data.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.episode}</CardText>
                <CardText>
                    <small className="text-muted">{props.status}</small>
                </CardText>
            </CardBody>
        </Card>
    </div>)
}

export default Character;