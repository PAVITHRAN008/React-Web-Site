import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux'
import { IMG_URL } from '../../service/httpServic';
import "./ModelPopUpComponent.css"
import QRCode from "react-qr-code";
function ModelPopUpComponent(props) {
    const showDetails = useSelector((state) => state.bookShowDetails)
    const selectMovie = showDetails.selectMovieDetails.movieList;
    const theaterName = showDetails.shearedData.theaterName;
    const time = showDetails.shearedData.time;
    const dayDetails = showDetails.shearedData.showDayDetails;
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <img src={IMG_URL + selectMovie.poster_path} />
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className='row'>
                        <div className='col-3'>
                            <img alt="" className='img-size' src={IMG_URL + selectMovie.poster_path} />
                        </div>
                        <div className='col-5'>
                            <h4>{selectMovie.original_title}</h4>
                            <h6>{selectMovie.original_language}</h6>
                            <h6>{dayDetails.days},&nbsp;{dayDetails.dates}&nbsp;{dayDetails.month}&nbsp;|&nbsp;{time}</h6>
                            <h6>{theaterName}</h6>
                            <h6>
                                <ul className='remove-bullt row'>
                                    Seats :
                                    {
                                        props.data.map((val, index) => {
                                            return (<li key={index} className='col-1'><h6>{val.rowName}{val.columnDetails.seatNumber}</h6></li>)
                                        })
                                    }
                                </ul>
                            </h6>
                        </div>
                        <div className='col-4'>
                            <QRCode type='string' value={selectMovie.original_title} size="200" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModelPopUpComponent
