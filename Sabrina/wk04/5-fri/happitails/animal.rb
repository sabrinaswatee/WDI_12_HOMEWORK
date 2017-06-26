require 'pry'

class Animal

@@animal_list = [
  {name: 'Dog', age: 2, gender: 'F', species: 'Poodle', toys: []}
]

  def initialize(input_name, input_age, input_gender, input_species, input_toys)
    @name = input_name.capitalize
    @age = input_age
    @gender = input_gender.capitalize
    @species = input_species.capitalize
    @toys = input_toys.split(', ')
  end

  # def store
  #   @@animal_list.push animal
  # end

end

binding.pry
