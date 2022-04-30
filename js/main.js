// //factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     };
// }
// const circle = createCircle(1)

// // Constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// const another = new Circle(1)

function Stopwatch () {
    let startTime, endTime, running, duration = 0;
    this.duration = function () {

    }
    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started');

        running = true;

        startTime = new Date()

    }
    this.stop = function () {
        if (!running)
        throw new Error('stopwatch is not started');

        endTime = new Date();

        const seconds = (endTime.getTime) - startTime.getTime() / 1000;
        duration += seconds


    }
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

}