import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less"
import Moment from 'moment'
import ReactPaginate from 'react-paginate'

function table({event, index}) {
    return (
        <tr className="align-middle">
            <td>{index+1}</td>
            <td>{event.title}</td>
            <td>{event.location}</td>
            <td>{Moment(event.date).format('dddd, DD MMMM YYYY')}</td>
            <td>{event.title}</td>
            <td width="300">
                <ReactReadMoreReadLess charLimit={50} readMoreText={"Read more ▼"} readLessText={"Read less ▲"}>
                    {event.note}
                </ReactReadMoreReadLess>
            </td>
        </tr>
    )
}

export default table
