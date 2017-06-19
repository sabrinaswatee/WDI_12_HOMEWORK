=begin
1. Create an array of the days of the week
Create a variable named days_of_the_week as an array of the following:
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday
=end

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
puts days_of_the_week

=begin
2. My calendar says the first day is Sunday...
Remove Sunday from the last postion and move it to the first position. Use array methods.
=end

last_day = days_of_the_week.pop
sunday_first = days_of_the_week.unshift(last_day)
puts sunday_first

=begin
3. Create a new array of the days of the week:
The first inner array should be the weekdays
The second inner array should be the weekend days
=end

new_days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']]
puts new_days_of_the_week

=begin
4. Remove either the weekdays or the weekends
Your choice...
=end

weekdays = new_days_of_the_week[0]
puts weekdays
weekends = new_days_of_the_week[1]
puts weekends

=begin
5. Sort the remaining days alphabetically
=end

weekdays_sorted = weekdays.sort
puts weekdays_sorted
weekends_sorted = weekends.sort
puts weekends_sorted
