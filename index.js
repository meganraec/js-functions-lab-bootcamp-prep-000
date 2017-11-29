function happyHolidays() {
  return "Happy holidays!";
}

happyHolidays();

function happyHolidaysTo(name) {
  var greeting = 'Happy holidays, '${name}!'';
  return greeting;
}

happyHolidaysTo(you);

function happyHolidayTo(holiday, name){
  var greeting = 'Happy ${holiday}, '${name}!''
  return greeting;
}

happyHolidayTo('Independence Day, you');

function holidayCountdown(holiday, days){
  var greeting = 'It\'s '${days}' days until '${holiday}!';
  return greeting;
}

holidayCountdown(20, 'Mother\'s Day');