import React, { useState, useEffect } from 'react'
import { API } from "../../config/api"

import Cards from "../../components/card"

function Home() {
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
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="row justify-content-left">
                    {loading ? (
                            "Loading . . ."
                        ) :  status == "Success" ? ( 
                            events.map((event) => (
                                <Cards event={event} key={event.id} />
                            ))
                        ) : (
                            "No Record"
                        )
                    }
                </div>             
            </div>
        </div>
    )
}

export default Home
