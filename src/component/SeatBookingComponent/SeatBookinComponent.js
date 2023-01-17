import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './SeatBookingComponent.css'
import { SEATS_STATUS, SEAT_COLUMN_ARRANGEMENT, SEAT_ROW_ARRANGEMENT } from '../../constant/Constant';
import screenImg from "../../assets/Screen.PNG";
import RightSideBookDetailsCom from '../RightSideBookDetailsComponent/RightSideBookDetailsCom';
// import { useSelector } from 'react-redux'

// const showBookingDetails = [];
// const setBookingStoredArray = (rowName, seatNumber) => {
//     let data = {};
//     data.rowName = rowName;
//     data.seatNumber = seatNumber;
//     showBookingDetails.push(data)
// }
const seatArray = () => {
    const setSeatValuArray = [];
    SEAT_ROW_ARRANGEMENT.map((val1) => {
        let data = {}
        let seatDetails = [];
        SEAT_COLUMN_ARRANGEMENT.map((val2) => {
            let data = {};
            data.seatNumber = val2
            data.seatStatus = 'NOT_BOOKED'
            seatDetails.push(data)
            return val2
        })
        data.rowName = val1
        data.seatDetails = seatDetails;
        setSeatValuArray.push(data)
        return val1
    })
    return setSeatValuArray

}

function SeatBookinComponent() {
    // const userDetails = useSelector((state) => state)
    const seatsStatusMap = SEATS_STATUS
    const [seatColumn, setSeatColumn] = useState(seatArray);
    const bookSelectedSeat = (rowName, seatNumber) => {
        const tempseatColumn = [...seatColumn]
        tempseatColumn.map((val1) => {
            if (val1.rowName === rowName) {
                val1.seatDetails.map((val2) => {
                    if (val2.seatNumber === seatNumber) {
                        val2.seatStatus = (val2.seatStatus === 'NOT_BOOKED') ? 'SELECTED' : 'NOT_BOOKED'
                        // setBookingStoredArray(rowName, seatNumber)
                    }
                    return val2
                })
            }
            return val1
        })
        setSeatColumn(tempseatColumn)
    }
    return (
        < Container >
            <Row className='row'>
                <Col sm={9}>
                    <div className='seat-grid-container '>
                        <Table>
                            {
                                seatColumn.map((seatCol, rowIndex) => {
                                    return (
                                        <tbody key={rowIndex}>
                                            {
                                                (rowIndex === 6 || rowIndex === 12 || rowIndex === 16) ? <tr><td>&nbsp;</td></tr> : null
                                            }
                                            <tr>
                                                <td>{seatCol.rowName}</td>
                                                <td>&nbsp;</td>
                                                {
                                                    seatCol.seatDetails.map((seat, colIndex) => {
                                                        return (rowIndex !== 0 && rowIndex !== 6 && (colIndex === 6 || colIndex === 7 || colIndex === 14 || colIndex === 15)) ? (
                                                            <td key={colIndex}>&nbsp;</td>
                                                        )
                                                            : (
                                                                <td className='seat' key={colIndex}>
                                                                    <FontAwesomeIcon color={seatsStatusMap[seat.seatStatus]} fontSize={'25'} icon={faCouch} onClick={() => bookSelectedSeat(seatCol.rowName, seat.seatNumber)} />
                                                                </td>
                                                            )
                                                    })
                                                }
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </Table>
                        <div className='screenImg'>
                            <img alt="" src={screenImg} width="250" height="50" className="d-inline-block align-top" />
                            <br></br>
                            <span>All eyes this way please!</span>

                        </div>
                    </div>
                </Col>
                <Col sm={3}>
                    <RightSideBookDetailsCom selectSeatDetails={seatColumn} />
                </Col>
            </Row>
        </Container >
    )
}

export default SeatBookinComponent
