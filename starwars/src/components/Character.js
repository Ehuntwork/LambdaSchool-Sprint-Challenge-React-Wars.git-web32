// Write your Character component here
import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

function Character(props){
    return (
    <div className='character'>
        <Card>
            <CardImg top width="100%" src={props.character.image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h3">{props.character.name}</CardTitle>
                <CardText tag="h4">{props.character.species}</CardText>
                <CardText>
                    <small className="text-muted">{props.character.status}</small>
                </CardText>
            </CardBody>
        </Card>
    </div>)
}

export default Character;