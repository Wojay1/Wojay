myArray = [
 {
    "principal": 2500,
     "time": 1.8
 },
 {
    "principal": 1000,
     "time": 5
 },
 {
    "principal": 3000,
     "time": 1
 },
 {
    "principal": 2000,
    "time": 3
 },
];

function interestCalculator(myArray) {
    let interestData = myArray.map(obj=> {
        let newThing = {};
        let principal = obj.principal;
        let time = obj.time;
        if (principal >= 2500 && time > 1 && time < 3){
            rate = 3;
        }
        else if (principal >= 2500 && time >= 3){
            rate = 4;
        }
        else if (principal < 2500 || time <=1 ){
            rate = 2;
        }
        else {
            rate = 1;
        }
        interest = (principal * rate * time) / 100;
        newThing = {"principal": principal, "rate": rate, "time":time, "interest": interest};
        return (newThing);})
    console.log(interestData);
    return interestData; }
   
interestCalculator(myArray)