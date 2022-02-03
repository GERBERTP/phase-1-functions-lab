
function distanceFromHqInBlocks(block) {
   if (block > 42){
       return block - 42
   } else{
       return 42 - block 
   }

}

function distanceFromHqInFeet(cat) {
    distanceFromHqInBlocks(cat);
    if (cat > 42){
        return (cat - 42)*264 
    } else{
        return (42 - cat) * 264 
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination){
        return (destination - start)*264
    } else{
        return (start - destination)*264
    }
}

function calculatesFarePrice(start, destination){
    let travelInFeet = distanceTravelledInFeet(start, destination);
    if (travelInFeet < 400){
        return 0
    } else if (travelInFeet > 2500){
        return 'cannot travel that far'
    } else if (travelInFeet > 2000){
        return 25
    } else if (400 < travelInFeet < 2000){
        return (travelInFeet - 400) * .02
    }

}
