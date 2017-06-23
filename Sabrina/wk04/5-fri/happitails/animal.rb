
class Monkey

  def initialize(input_name, input_species)
    @name = input_name.capitalize
    @species = input_species.capitalize
    @food_eaten = []
  end

  def eat(input_food)
    @food_eaten.push input_food
  end

  def introduce
    puts "Hi my name is #{@name}. I am a #{@species}. I had #{@food_eaten.join(' and ')} for brunch"
  end

end
