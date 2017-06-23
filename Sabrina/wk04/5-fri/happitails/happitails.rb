require 'pry'

def select_operation (selection)
  case selection
  when 1
    display_animals
  when 2
    display_clients
  when 3
    create_animal
  when 4
    create_client
  when 5
    adopt_animal
  when 6
    animal_shelter
  end
end

puts "Welcome to HappiTails Animal Shelter"
print "   1. Display all animals \n   2. Display all clients \n   3. Create an animal \n   4. Create an client \n   5. Adopts an animal \n   6. Place an animal up for adoption \n"
print "Your selection: "
selection = gets.chomp.to_i

# binding.pry
