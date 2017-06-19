=begin
Explanation
You will be building a calculator. A calculator can perform multiple arithmetic operations.
Your function should allow the user to choose which operation is expected,
enter in the values to perform the operation on, and ultimately view the result.

Specification:
A user should be given a menu of operations
A user should be able to choose from the menu
A user should be able to enter numbers to perform the operation on
A user should be shown the result
This process should continue until the user selects a quit option from the menu

Phase 1
Calculator functionality
Calculator should be able to do basic arithmetic (+,-, *, /)

Phase 2
Advanced Calculator functionality
Calculator should be able to do basic arithmetic (exponents, square roots)

Phase 3
User should be given a menu of Calculator functionality
User should be able to choose intended functionality

Optional Extensions
Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4
=end

def sum (num_array)
  result = 0
  num_array.each do |num|
    result += num.to_i
  end
  print "Total sum = #{result}\n"
end

def difference (num1, num2)
  print "Difference of #{num1} and #{num2} = #{num1 - num2}\n"
end

def product (num1, num2)
  print "Product of #{num1} and #{num2} = #{num1 * num2}\n"
end

def quotient (num1, num2)
  print "Quotient of #{num1} divided by #{num2} = #{num1 / num2}\n"
end

def modulo (num1, num2)
  print "Remainder of #{num1} divided by #{num2} = #{num1 % num2}\n"
end

def power (num1, num2)
  print "Value of #{num1} to the power of #{num2} = #{num1 ** num2}\n"
end

def root (num)
  print "Square root of #{num} = #{num ** 0.5}\n"
end

def select_operation (operation, input1, input2)
  case operation
  when 2
    difference(input1, input2)
  when 3
    product(input1, input2)
  when 4
    quotient(input1, input2)
  when 5
    modulo(input1, input2)
  when 6
    power(input1, input2)
  end
end

puts "Welcome to Command Line Calculator"
loop do
  puts "Select from \n1. Addition \n2. Subtraction \n3. Mutiplication \n4. Division \n5. Remainder \n6. Power \n7. Square Root \n8. Quit"
  operation = gets.chomp.to_i
  if operation == 1
    print "Inputs (separated by commas): "
    input_array = gets.chomp.split(', ')
    puts input_array
    sum(input_array)
  elsif operation > 1 && operation < 7
    print "Input 1: "
    input1 = gets.chomp.to_i
    print "Input 2: "
    input2 = gets.chomp.to_i
    select_operation(operation, input1, input2)
  elsif operation == 7
    puts "Input: "
    input = gets.chomp.to_i
    root(input)
  end
  break if operation == 8
end
