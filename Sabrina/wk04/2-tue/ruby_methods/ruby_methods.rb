=begin
Round 1
Write a function lengths that accepts a single parameter as an argument,
namely an array of strings. The function should return an array of numbers.
Each number in the array should be the length of the corresponding string.

words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]
=end

def getlength (array_strings)
  array_lengths = []
  array_strings.each do |string|
    array_lengths.push string.length
  end
  print "#{array_lengths} \n"
  return array_lengths
end

getlength(["hello", "what", "is", "up", "dude"])

=begin
Round 2
Write a Ruby function called transmogrifier This function should accept three arguments,
which you can assume will be numbers. Your function should return the "transmogrified" result

The transmogrified result of three numbers is the product (numbers multiplied together)
of the first two numbers, raised to the power (exponentially) of the third number.
For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

Use your function to find the following answers.
transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)
=end

def transmogrifier (num1, num2, num3)
  result = (num1 * num2) ** num3
  puts result
end

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

=begin
Round 3
Write a function called toonify that takes two parameters, accent and sentence.

If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
If the accent is "elmer", replace all "r" with "w".
Feel free to add your own accents as well!
If the accent is not recognized, just return the sentence as-is.
toonify("daffy", "so you smell like sausage")
#=> "tho you thmell like thauthage"
=end

def toonify (accent, sentence)
  new_sentence = []
  if accent == 'daffy'
    sentence.split('').each do |character|
      if character == 's'
        new_sentence.push 'th'
      else
        new_sentence.push character
      end
    end
  elsif accent == 'elmer'
    sentence.split('').each do |character|
      if character == 'r'
        new_sentence.push 'w'
      else
        new_sentence.push character
      end
    end
  end
  puts new_sentence.join
end

toonify("daffy", "so you smell like sausage")
toonify("elmer", "rabbit rides ruby on rails")

=begin
Round 4
Write a function wordReverse that accepts a single argument, a string.
The method should return a string with the order of the words reversed. Don't worry about punctuation.

wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"
=end

def wordReverse (string)
  puts string.split.reverse.join(' ')
end

wordReverse("Now I know what a TV dinner feels like")

=begin
Round 5
Write a function letterReverse that accepts a single argument, a string.
The function should maintain the order of words in the string but reverse the letters in each word.
Don't worry about punctuation.
This will be very similar to round 4 except you won't need to split them with a space.

letterReverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
letterReverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"
=end

def letterReverse (string)
  new_string = []
  string.split.each do |word|
    new_string.push word.reverse
  end
  puts new_string.join(' ')
end

letterReverse("Put Hans back on the line")

=begin
Round 6
Write a function longest that accepts a single argument, an array of strings.
The method should return the longest word in the array.
In case of a tie, the method should return either.

longest(["oh", "good", "grief"]) # => "grief"
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"
=end

def longest (string)
  length_string = getlength(string)
  string.each do |word|
    if word.length == length_string.max
      puts word
    end
  end
end

longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
