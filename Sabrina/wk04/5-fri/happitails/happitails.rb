=begin
HappiTails

Objectives:
Practice creating objects
You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals.

Specification:
Object Specs:

Animal: // create separate file.rb
An animal should have a name.
An animal should have an age.
An animal should have a gender.
An animal should have a species.
An animal can have multiple toys.

Client:
A client should have a name.
A client should have a number of children.
A client should have an age.
A client should have a list of pets.

Shelter:
The shelter should display all the clients.
The shelter should display all the animals.

Relationships:
A client should be able to adopt an animal.
A client should be able to put an animal up for adoption

Phase 1
Can create animals and clients

Phase 2
New animals and clients can be added to the shelter

Phase 3
When creating an animal or client, the user is prompted for information like names, gender etc.

Phase 4
At start, the user is prompted with a menu of options:
display all animals
display all clients
create an animal
create an client
facilitate client adopts an animal
facilitate client puts an animal up for adoption
After selecting from the menu the task the user is prompted through the entire process
=end

require 'pry'
# require_relative 'animal'
# require_relative 'client'

# def shelter
#   animal_list = []
#   client_list = []
  @@shelter = [[], []]
# end

class Animal
  def initialize(input_name, input_age, input_gender, input_species, input_toys)
    @name = input_name.capitalize
    @age = input_age
    @gender = input_gender.capitalize
    @species = input_species.capitalize
    @toys = input_toys.split(', ')
  end
end

class Clinet
  def initialize(input_name, input_age, input_children, input_pets)
    @name = input_name.capitalize
    @age = input_age
    @children = input_children
    @pets = input_pets(', ')
  end
end

def display_animals
  @@shelter[0].each do |animal|
    print animal
  end
end

def display_clients

end

def select_operation (selection)
  case selection
  when 1

  when 2
    display_clients
  when 3
    print "Name of animal: "
    input_name = gets.chomp.capitalize
    print "Age of animal: "
    input_age = gets.chomp.to_i
    print "Gender of animal: "
    input_gender = gets.chomp.capitalize
    print "Species of animal: "
    input_species = gets.chomp.capitalize
    print "Toys of animal: "
    input_toys = gets.chomp
    # require_relative 'animal'
    animal = Animal.new(input_name, input_age, input_gender, input_species, input_toys)
    @@shelter[0].push animal
    # binding.pry
  when 4
    print "Name of client: "
    input_name = gets.chomp.capitalize
    print "Age of client: "
    input_age = gets.chomp.to_i
    print "NUmber of children: "
    input_children = gets.chomp.to_i
    print "Pets: "
    input_pets = gets.chomp
    # require_relative 'client'
    client = client.new(input_name, input_age, input_children, input_pets)
    @@shelter[1].push client
    # binding.pry
  # when 5
  #   adopt_animal
  # when 6
  #   animal_shelter
  end
end

puts "Welcome to HappiTails Animal Shelter"
print "   1. Display all animals \n   2. Display all clients \n   3. Create an animal \n   4. Create an client \n   5. Adopts an animal \n   6. Place an animal up for adoption \n"
print "Your selection: "
selection = gets.chomp.to_i
select_operation (selection)

# binding.pry
