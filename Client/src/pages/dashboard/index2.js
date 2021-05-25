import React, { useState, useEffect } from 'react'
import { API } from "../../config/api"

import Table from "../../components/table"

function Dashboard() {
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
        } catch (error) {
          console.log(error)
        } 
    }
    return (
        <div className="row justify-content-center">
            <div className="table-reponsif">
                <table className="table table-striped mb-5">
                    <thead>
                        <tr className="c-red">
                        <th scope="col">No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Location</th>
                        <th scope="col">Date</th>
                        <th scope="col">Participant</th>
                        <th scope="col">Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {status == "Success" ?
                            ( events.map((event, index) => (
                                <Table key={event.id} event={event} index={index}/>
                            ))
                            ) : (
                                "No Record"
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard
