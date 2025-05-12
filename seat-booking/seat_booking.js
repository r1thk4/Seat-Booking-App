const seats = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

function bookSeat(row , col){
    if( seats[row][col] === 0) {
        seats[row][col] = 1;
        updateSeats(row, col, 'booked');
        alert(`Seat ${String.fromCharCode(65 + row)}${col+1} is now booked.`);
    }
    else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col+1} is already booked.`);
    }
}

function updateSeats(row, col, status) {
    const seat = document.getElementsByClassName('seat');
    const index = 5 * row + col ;
    seat[index].classList.remove('available', 'booked');
    seat[index].classList.add(status);
}
