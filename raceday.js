let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge =18;
if( runnerAge >18 ){
 raceNumber+=1000;
}
if(runnerAge >18 && registeredEarly){
console.log(`you will run at 9:30 ${raceNumber}`);
}
else if (runnerAge >18 && !registeredEarly) {
   console.log(` you will run at 11:00 ${raceNumber}`) ;
}
else if (runnerAge <18) {
    console.log(` you will run at 12:30 ${raceNumber}`) ;
 }
 else{
    console.log("see the registration desk");
 }


