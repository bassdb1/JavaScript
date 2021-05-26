const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
      return true;
    }else{
      return false;
    }
  
  };
  // Calling the Function with the Argument of (Tuesday), in a console.log
  console.log(plantNeedsWater('Tuesday'));