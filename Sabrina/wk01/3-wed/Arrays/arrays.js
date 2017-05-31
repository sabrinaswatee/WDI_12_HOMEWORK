// Create an array of days of the week

var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//
// First day is Sunday ..

days_of_the_week.pop();
days_of_the_week.unshift('Sunday');

//
// New array of days of week

var new_days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']];

//
// Remove weekends

var weekends = new_days_of_the_week.pop();

//
// Remove weekdays

var weekdays = new_days_of_the_week.splice(0, 1);

//
// Sort alphabetically

weekends.sort();
weekdays[0].sort();

//
