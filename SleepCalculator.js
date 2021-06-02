const getSleepHours = day => {

  switch(day){
    case 'Sunday':
      return 8
      break;
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 8
      break;
    case 'Wednesday':
      return 8
      break;
    case 'Thursday':
      return 8
      break;
    case 'Friday':
      return 8
      break;
    case 'Saturday':
      return 8
      break;
    default:
      return "Error!"
  }
    
  };
  
  const getActualSleepHours = () => getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours ('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday')
  ;
  
  console.log(getSleepHours('Monday'));
  
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours){
      console.log("Perfect amount of sleep");
  
    }else if(actualSleepHours > idealSleepHours){
        console.log("You've got " + (idealSleepHours - actualSleepHours ) + "more sleep than needed");
  
    }else if(actualSleepHours < idealSleepHours){
         console.log("You've got " + (actualSleepHours - idealSleepHours) + " You need to get some rest");
    }else {
      console.log("Error! Please check your input");
    }
   
  };
  
  calculateSleepDebt();
  