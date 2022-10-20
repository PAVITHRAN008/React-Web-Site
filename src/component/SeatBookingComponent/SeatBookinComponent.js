import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import './SeatBookingComponent.css'
import { SEAT_COLUMN_ARRANGEMENT, SEAT_ROW_ARRANGEMENT } from '../../constant/Constant';
import screenImg from "../../assets/Screen.PNG";

function SeatBookinComponent() {
    function selectSeat(e) {
        console.log(e)
    }
    return (
        <div className='seat-grid-container'>
            <Table>
                <tbody>
                    {
                        SEAT_ROW_ARRANGEMENT.map((seatCol, rowIndex) => {
                            return (
                                <>
                                    {
                                        (rowIndex === 6 || rowIndex === 12 || rowIndex === 16) ? <tr>&nbsp;</tr> : null
                                    }
                                    <tr key={rowIndex}>
                                        <td>{seatCol}</td>
                                        <td>&nbsp;</td>
                                        {
                                            SEAT_COLUMN_ARRANGEMENT.map((seat, colIndex) => {
                                                return (rowIndex !== 0 && rowIndex !==6 && (colIndex === 6 || colIndex === 7 || colIndex === 14 || colIndex === 15)) ? (
                                                    <td>&nbsp;</td>
                                                )
                                                    : (
                                                        <td className='seat' onClick={() => selectSeat(colIndex)} key={colIndex}>
                                                            <FontAwesomeIcon color='grey' fontSize={'25'} icon={faCouch} />
                                                        </td>
                                                    )
                                            })
                                        }
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div className='screenImg'>
                <img alt="" src={screenImg} width="250" height="50" className="d-inline-block align-top" />
                <br></br>
                <span>All eyes this way please!</span>
            </div>
        </div>
    )
}

export default SeatBookinComponent
