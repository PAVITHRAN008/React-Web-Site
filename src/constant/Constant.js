export const DAYS = {
    0: "SUN",
    1: "MON",
    2: "THU",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
}
export const MONTHS = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}
export const SHOW_TIMINGS = ["11:10 AM", "03:00 PM", "06:45 PM", "10:35 PM"]

export const SEAT_COLUMN_ARRANGEMENT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// export const SEAT_COLUMN_ARRANGEMENT = () => {

//     let seatDetails = [...Array[20].map((value, index) => {
//         return {
//             seatNumber: index + 1,
//             isSeatBooked: false
//         }
//     })]
//     return seatDetails
// }
// export const SEAT_COLUMN_ARRANGEMENT = [
//     {
//         seatNumber: 1,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 2,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 3,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 4,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 5,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 6,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 7,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 8,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 9,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 10,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 11,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 12,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 13,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 14,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 15,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 16,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 17,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 18,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 19,
//         isSeatBooked: false
//     },
//     {
//         seatNumber: 20,
//         isSeatBooked: false
//     },
// ]

export const SEAT_ROW_ARRANGEMENT = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'
]
export const THEATERS_NAME = [
    'Sangam Cinemas 4K RGB Laser Dolby Atmos', 'Devicineplex', 'Kamala Cinemas', 'Kasi Theatre RGB Laser Dolby Atmos - Chennai', 'Rakki Cinemas - Ambattur'
]


export const SEATS_STATUS = {
    NOT_BOOKED: "gray",
    SELECTED: "green",
    BOOKED: "red",
}