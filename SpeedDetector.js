const speed=x;// x is the input speed in km/h

const speedLimit=70; //this is the maximum speed above which a driver gets demerit points 

let demeritPoints = 0;

if (x<=70){return "Ok"};
 

const speedAbove=speed - speedLimit;//to get how much higher the speed is above speed limit
demeritPoints = math.floor(speedAbove/5); //Math.floor->rounds the number to the nearest integer 

if (demeritPoints>12){
  return "License suspended";
}

return `Demerit points: ${demeritPoints}`;// shows how many demerit points a driver has.