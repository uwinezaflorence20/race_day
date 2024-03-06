let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge =18;
if( runnerAge >18 ){// add 1000 to the runner above 18 years old
 raceNumber+=1000;
}
if(runnerAge >18 && registeredEarly){// runner above 18 and registered early
console.log(`you will run at 9:30 ${raceNumber}`);
}
else if (runnerAge >18 && !registeredEarly) {//runner above 18 and registered early
   console.log(` you will run at 11:00 ${raceNumber}`) ;
}
else if (runnerAge <18) {//unner below 18 and registered early or late
    console.log(` you will run at 12:30 ${raceNumber}`) ;
 }
 else{
    console.log("see the registration desk");// runner  who are 18 years old
 }


