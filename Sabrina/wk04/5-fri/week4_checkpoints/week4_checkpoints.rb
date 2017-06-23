=begin
Alfred and Peter are best friends and Pokemon card traders.
Each week they get together and decide to buy a new pack of Pokemon trading cards.
Each pack has a total of 10 cards. Each card has the Pokemon's name and attack power.

Alfred and Peter have not opened the pack yet, but it contains the following cards:
Name	Attack
Pikachu	40
Rattata	20
Pidgeot	60
Alakazam	80
Butterfree	30
Gengar	70
Moltres	100
Vulpix	40
Blastoise	80
Hitmonchan	50

Put the above cards into an appropriate data structure (so that you can easily remove or change the order of cards if you needed to)
They are about to open the pack of cards, and they have a ritual for deciding who gets to keep each card in the pack.

Do each of the following with your data structure:
2a) Firstly, keeping the cards faced down (so they cannot see), they reverse the order of the cards.
2b) They then split the cards into groups of 3, so they end up with 4 piles of cards (the first three with 3, and the last pile with just 1)
2c) Alfred takes the first pile of cards, and Peter takes the second pile.
    Create a new data structure for Alfred and Peter to hold these cards.
2d) At this point only two piles of cards are leftover, one with 3 cards, and one with 1 card.
    They decide to arm-wrestle, where the winner gets the pile with 3 cards, and the loser gets the remaining pile.
    They both have a 50% chance of winning, so write some randomising code that decides which pile each person gets.
=end

require 'pry'

# poke_cards = [['Pikachu', 40], ['Rattata', 20], ['Pidgeot', 60], ['Alkazam', 80], ['Butterfree', 30], ['Gengar', 70], ['Moltres', 100], ['Vulpix', 40], ['Blastoise', 80], ['Hitmonchan', 50]]

cards = [
{:name => "Pikachu", :attack => 40},
{:name => "Rattata", :attack => 20},
{:name => "Pidgeot", :attack => 60},
{:name => "Alakazam", :attack => 80},
{:name => "Butterfree", :attack => 30},
{:name => "Gengar", :attack => 70},
{:name => "Moltres", :attack => 100},
{:name => "Vulpix", :attack => 40},
{:name => "Blastoise", :attack => 80},
{:name => "Hotmonchan", :attack => 50}]

# alfred_pile =[]
# petter_pile =[]
#
# split_array = cards.reverse.each_slice(3).to_a
#
# alfred_pile = split_array.shift
# peter_pile = split_array.shift
#
# if [0, 1].sample == 0
#   alfred_pile.push(split_array.shift).flatten!
#   peter_pile.push(split_array.shift).flatten!
# else
#   peter_pile.push(split_array.shift).flatten!
#   alfred_pile.push(split_array.shift).flatten!
# end

groups = cards.reverse.each_slice(3).to_a
players = { alfred: groups.shift, peter: groups.shift}

# winner = if rand(0..1) == 0
#   :alfred
# else
#   :peter
# end
winner = rand(0..1) == 0 ? :alfred : :peter
loser = winner == :alfred  ? :peter : :alfred

players[winner].push(split_array.shift).flatten!
players[loser].push(split_array.shift).flatten!

print ("#{alfred_pile} \n")
print ("#{peter_pile} \n")
# binding.pry
