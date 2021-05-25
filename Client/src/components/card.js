import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons"
import ReactReadMoreReadLess from "react-read-more-read-less"
import Moment from 'moment'

function Cards({event}) {
    const {title, location, date, participants, note, picture } = event

    return (
        <Card className="col-md-3 m-1 p-3">
            <div className="text-center">
                <Card.Img variant="top" src={'/images/'+picture} className="card-image" />
            </div>
            <Card.Body>
                <div className="text-left">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 c-red" />{location}
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="c-grey">{Moment(date).format('dddd, DD MMMM YYYY')}</Card.Subtitle>
                <hr />
                <div className="text-left mt-2">
                    {participants ? (
                        participants.map(par => 
                            <div className="c-grey inline mr-3"><FontAwesomeIcon icon={faUser} className="mr-2" />{par.name}</div>
                        )
                    ) : (
                        <div className="c-grey inline mr-3">No Participants</div>
                    )}
                </div>
                <hr />
                <Card.Text>
                    <ReactReadMoreReadLess charLimit={100} readMoreText={"Read more ▼"} readLessText={"Read less ▲"}>
                        {note}
                    </ReactReadMoreReadLess>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards
