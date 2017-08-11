=begin
Allergies
An allergy test produces a single numeric score which contains the information
about all the allergies the person has (that they were tested for).

The list of items (and their value) that were tested are:
eggs (1)
peanuts (2)
shellfish (4)
strawberries (8)
tomatoes (16)
chocolate (32)
pollen (64)
cats (128)

So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Write a program that, given a person's score can tell them
a) whether or not they're allergic to a given item, and b) the full list of allergies.
allergies = Allergies.new(34)
allergies.allergic_to?('chocolate')
=> true
allergies.allergic_to?('cats')
=> false
allergies.list
=> ['peanuts', 'chocolate']
=end

require 'pry'

class Allergies

  @@list = {
    'eggs' => 1,
    'peanuts' => 2,
    'shellfish' => 4,
    'strawberries' => 8,
    'tomatoes' => 16,
    'chocolate' => 32,
    'pollen' => 64,
    'cats' => 128
  }

  def initialize(score)
    @score = score
    @contain = []
    calculate = 0

    reversed_list = Hash[@@list.to_a.reverse]
    reversed_list.each do |key, value|
      calculate = calculate + value
      if value < @score && calculate <= @score
        @contain.push(key)
      else
        calculate = calculate - value
      end
    end
  end

  def list
    @contain
  end

  def allergic_to?(item)
    if @contain.include? item
      return true
    else
      return false
    end
  end

end

binding.pry

allergies = Allergy.new(34)
