function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }
    students = [];

    for(let i = 1; i <= numbersOfStudents; i++) {
        let seatFunc = studentSeat(i);
        students.push(seatFunc);
    }
    return students;
}

var classRoom = createClassRoom(10);
