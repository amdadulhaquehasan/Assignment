// Qiestion 1

function describeValue(value) {
    if (typeof value === "string"){
        return (value.length > 0) ? typeof value + " | truthy" : typeof value + " | falsy"; 
    }
    else if (typeof value === "number"){
        return (value > 0 || value < 0) ? typeof value + " | truthy" : typeof value + " | falsy";  
    }
    else if (typeof value === "boolean"){
        return (value === true) ? typeof value + " | truthy" : typeof value + " | falsy";  
    }
    else if (typeof value === "object"){
        return (value !== null) ? typeof value + " | truthy" : typeof value + " | falsy";
    }
    else if (typeof value === "undefined"){
        return typeof value + " | falsy";
    }
    else {
        return "unknown type";
    }
}

// Qiestion 2

function getDayType(day){
    let dayUC = day.toUpperCase();
    switch(dayUC){
        case "FRIDAY":
        case "SATURDAY":
            return "Weekend";
            break;
        case "SUNDAY":
        case "MONDAY":
        case "TUESDAY":
        case "WEDNESDAY":
        case "THURSDAY":
            return "Working Day";
            break;
        default:
            return "Invalid Day";
    }   
}

// Qiestion 3

function validateUsername(username){
    if(typeof username === "string" && username.length > 0){
        if(username.length < 4){
            return "Too Short";
        }
        else if(username.includes(" ")){
            return "No Space Allowed"; 
        }
        else if(username.toLowerCase().includes("admin")){
            return "Reserved Word";
        }
        else{
            return "Available";
        }
    }
    else{
        return "Invalid Input";
    }
    
}

// Qiestion 4

function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let baseFare = 50;
    let farePerKm = 15;
    let totalFare = 0;

    if(distance <= 2){
        totalFare = baseFare;
    }
    else{
        let extraDistance = distance - 2;
        let extraFare = extraDistance * farePerKm;
        totalFare = baseFare + extraFare;
    }

    if(waitingMinutes > 0){
        let waitingFare = waitingMinutes * 2;
        totalFare += waitingFare;
    }
    if(isNight){
        totalFare *= 1.2;
    }   

    return totalFare;
}

// Question 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    let requiredRate = (runsNeeded / ballsLeft) * 6
    let status = "";
    
    if(requiredRate <= 6){
        status = "Comfortable";
    }
    else if(requiredRate > 6 && requiredRate <= 12){
        status = "Tough";
    }
    else{
        status = "Almost Impossible";
    }
    if(runsNeeded <= 0){
        return "Won";
    }
    else if(ballsLeft <= 0){
       return "Lost";
    }
    else {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${status}`;
    }
}