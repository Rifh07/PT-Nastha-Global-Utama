import React, { useState } from 'react'
import { API } from "../../config/api"
import { Image, Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faImage } from "@fortawesome/free-solid-svg-icons"

function AddEvent() {
    const [msg, setMsg] = useState(null);
    const [color, setColor] = useState(null);
    const [alert, setAlert] = useState(false);
    const handleAlert = () => {
        setAlert(true)
    }
    const handleAlertc = () => {
        setAlert(false)
    }
    const [formData, setForm] = useState({
        title: "",
        locations: "",
        participant: [],
        date: "",
        note: ""
    });
    const [picture, setPicture] = useState({
        pictureName : "",
        pictureFile : null,
        fileLocation : ""
    });

    const onChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    };
    const pictureHandler = (e) => {
        setPicture({
            pictureFile : e.target.files[0],
            pictureName : e.target.files[0].name,
            fileLocation : URL.createObjectURL(e.target.files[0])
        })
    };
    const {title, locations, date, note} = formData
    const {fileLocation, pictureFile} = picture
    const Submit = async (e) => {
        e.preventDefault();
        try {
            const body = new FormData()
            body.append("title", title)
            body.append("location", locations)
            body.append("date", date)
            body.append("note", note)
            body.append("picture", pictureFile)

            const config = {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
            }

            const add = await API.post('/event', body, config)
            setForm({
                title: "",
                locations: "",
                participant: [],
                date: "",
                note: ""
            });
            setPicture({
                pictureName : "",
                pictureFile : null,
                fileLocation : ""
            })
            setColor("text-center text-success");
            setMsg("Success");
            handleAlert();
        } catch (error) {
            setColor("text-center text-danger");
            setMsg("Unsuccess");
            handleAlert();
      };
    }

    return (
        <div className="container-lg bg-white ml-5 mr-5 p-5">
            <form onSubmit={(e) => Submit(e)}>
                <h5><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Event</h5>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="form-row mb-2">
                            <div className="col">
                                <input type="text" name="title" className="form-control" onChange={(e) => onChange(e)} placeholder="Title"/>
                            </div>
                            <div className="col">
                                <input type="text" name="locations" className="form-control" onChange={(e) => onChange(e)} placeholder="Location" />
                            </div>
                        </div>
                        <div className="form-row mb-2">
                            <div className="col">
                                <input type="text" name="participant" className="form-control" onChange={(e) => onChange(e)} placeholder="Participant"/>
                            </div>
                            <div className="col">
                                <input type="date" name="date" className="form-control" onChange={(e) => onChange(e)} placeholder="Date" />
                            </div>
                        </div>
                        <div className="form-row mb-2">
                            <div className="col">
                                <textarea name="note" className="form-control" onChange={(e) => onChange(e)} placeholder="Note"/>
                            </div>
                        </div>
                        <div className="form-row mb-2">
                            <div className="col">
                                <input type="file" name="picture" className="form-control" onChange={(e) => pictureHandler(e)} placeholder="picture"/>
                            </div>
                        </div>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </div>
                    <div className="col-md-6 border rounded">
                        <div className="align-middle text-center p-3">
                            {fileLocation ? (
                                <Image className="form-image " src={fileLocation}/>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faImage} className="align-middle" /> <br />
                                    No Image
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </form>
            <Modal aria-labelledby="contained-modal-title-vcenter" centered show={alert} onHide={handleAlertc}>
                <Modal.Body className="width-100" id="contained-modal-title-vcenter">
                    <p className={color}>{msg}</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddEvent
