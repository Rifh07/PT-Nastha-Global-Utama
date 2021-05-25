import React, { useState, useEffect } from 'react'
import { API } from "../../config/api"
import ReactReadMoreReadLess from "react-read-more-read-less"
import Moment from 'moment'
import { MDBDataTable } from 'mdbreact'

function Dashboard() {
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState("Unsuccess")
    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        try {
            const eventss = await API.get('/event')
            await setStatus(eventss.data.status)
            await setEvents(eventss.data.events)
            await setLoading(false)
        } catch (error) {
          console.log(error)
        } 
    }
        const data = {
            columns: [
                {
                    label: 'No',
                    field: 'no',
                    sort: 'asc',
                    width: 10
                },
                {
                    label: 'Title',
                    field: 'title',
                    sort: 'asc',
                    width: 10
                },
                {
                    label: 'Location',
                    field: 'location',
                    sort: 'asc',
                    width: 10
                },
                {
                    label: 'Date',
                    field: 'date',
                    sort: 'asc',
                    width: 10
                },
                {
                    label: 'Participants',
                    field: 'participants',
                    sort: 'asc',
                    width: 10
                },
                {
                    label: 'Note',
                    field: 'note',
                    sort: 'asc',
                    width: 25
                },
            ],
            rows: events.map((event, index) => ( 
                {
                    no: index+1,
                    title: event.title,
                    location: event.location,
                    date: Moment(event.date).format('dddd, DD MMMM YYYY'),
                    participants: event.participants?(event.participants.map(par => <>{par.name+", "}</>)):("No Participant"),
                    note: <ReactReadMoreReadLess charLimit={50} readMoreText={"Read more ▼"} readLessText={"Read less ▲"}>{event.note}</ReactReadMoreReadLess>
                }
            ))
        }
    return (
        <div className="row justify-content-center">
            {loading ? (
                "Loading . . ."
            ) : (
                <MDBDataTable
                    className="col-md-10"
                    striped
                    bordered
                    small
                    data={data}
                />
            )}
        </div>
    )
}

export default Dashboard
