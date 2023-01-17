import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './RightSideBookDetailsCom.css'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModelPopUpComponent from '../ModelPopUp/ModelPopUpComponent';
import mainLogo from "../../assets/movielogo.PNG";
// import { useDispatch } from 'react-redux'
// import { showDetailsAction } from '../../store/showDetailsSlice';

function RightSideBookDetailsCom(props) {
    // const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false)
    const showDetails = useSelector((state) => state.bookShowDetails)
    const selectMovie = showDetails.selectMovieDetails.movieList;
    const theaterName = showDetails.shearedData.theaterName;
    const time = showDetails.shearedData.time;
    const dayDetails = showDetails.shearedData.showDayDetails;
    const selectSeatsLength = [];
    var price = 0;
    var ticketPrice = 120.00;
    const numberOfSeatSelect = (columnDetails, rowName) => {
        let selectData = {};
        selectData.rowName = rowName;
        selectData.columnDetails = columnDetails
        price += ticketPrice;
        selectSeatsLength.push(selectData)
    }
    const ticketBooking = (seat) => {
        if (seat === 0) {
            toast.info('Please choose atleast 1 ticket.!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            var options = {
                key: "rzp_test_abeV0fbWCCMhix",
                key_secret: "8dAIWTaGmpRzEHLvcVAzfMzc",
                image: mainLogo,
                name: "DSP Ticket Book App",
                description: "for testing purpose",
                amount: price * 100,
                currency: "INR",
                handler: function (response) {
                    conformBookingStatus(response);

                },
                prefill: {
                    name: "pavithran",
                    email: "jillapavi76@gmail.com",
                    contact: "8667351904"
                },
                notes: {
                    address: "DSP Ticket Book App"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }
    function conformBookingStatus(response) {
        if (response.razorpay_payment_id) {
            toast.success('Payment Successful...', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        setModalShow(true)
        // console.log(response)
        // console.log(response.razorpay_payment_id);
    }
    const dispatchBookedMovieDetails = () => {
        setModalShow(false)
        let bookedMovieDetails = {};
        props.selectSeatDetails.map((val1) => {
            val1.seatDetails.map((val2) => {
                if (val2.seatStatus === 'SELECTED') {
                    val2.seatStatus = "BOOKED"
                }
                return val2
            })
            return val1
        })
        bookedMovieDetails.bookedMovieSeatDetails = props.selectSeatDetails;
        bookedMovieDetails.movieDetails = selectMovie;
        bookedMovieDetails.theaterName = theaterName;
        bookedMovieDetails.movieTime = time;
        bookedMovieDetails.dayDetails = dayDetails;
        console.log(bookedMovieDetails)
    }
    return (
        <div>
            <div className='movieName-white-box'>
                <h2>{selectMovie.original_title}</h2>
                <h5>{selectMovie.original_language}</h5>
            </div>
            <div className='theaterName-white-box'>
                <h6 className='titleText-color'>THEATERS</h6>
                <h5>{theaterName}</h5>
            </div>
            <div className='showTime'>
                <h6 className='titleText-color'>SHOWTIME</h6>
                <h5 className='showTimeColor'>
                    <span>{dayDetails.days},&nbsp;{dayDetails.dates}&nbsp;{dayDetails.month}&nbsp;{time}</span>
                </h5>
            </div>
            <div className='selectSeats'>
                <ul>{
                    props.selectSeatDetails.map((val1) => {
                        return (
                            val1.seatDetails.map((val2, index2) => {
                                return (val2.seatStatus === 'SELECTED') ? (<li className='selectedSeats' key={index2} onChange={numberOfSeatSelect(val2, val1.rowName)}>{val1.rowName}{val2.seatNumber}</li>) : null
                            })
                        )
                    })
                }
                </ul>
            </div>
            <div className='row showSeatsDetails'>
                <h5 className='col seats'>{selectSeatsLength.length} Seat(s)</h5>
                <h5 className='col price'>&#8377;<span>{price}.00</span></h5>
            </div>
            <div className='tn-button'>
                <Button onClick={() => ticketBooking(selectSeatsLength.length)}>Continue</Button>
            </div>
            <div className='tn-button'>
                <Button className='btn' variant="flat">Cancel</Button>
            </div>
            <ToastContainer />
            <ModelPopUpComponent show={modalShow} data={selectSeatsLength}
                onHide={dispatchBookedMovieDetails} />
        </div>
    )
}

export default RightSideBookDetailsCom
