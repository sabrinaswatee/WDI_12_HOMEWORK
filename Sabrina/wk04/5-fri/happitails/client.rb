require 'pry'

class Client

@@client_list = [
  {name: 'Susan', age: 30, children: 2, pets: []}
]

  def initialize(input_name, input_age, input_children, input_pets)
    @name = input_name.capitalize
    @age = input_age
    @children = input_children
    @pets = input_pets(', ')
  end

  # def store
  #   @@client_list.push client
  # end

end

binding.pry
