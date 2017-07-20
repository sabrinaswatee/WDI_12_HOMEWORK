class GamesController < ApplicationController

  def index
  end

  def magic
    random = (Random.rand() * 20).round
    answers =  ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it",
    "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again",
    "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

    @question = params[:question]
    @answer = answers[random]
  end

  def secret
    secret = 9
    # secret = (1..10).to_a.sample
    @number = params[:number]
    binding.pry

    if @number == secret.to_s
      @answer = 'Win!'
    else
      @answer = 'Lose!'
    end
    # binding.pry
  end

  def rock
    choices = ['Rock', 'Paper', 'Scissors']
    num = [0, 1, 2].sample

    @compThrow = choices[num]
    @yourThrow = params[:throw]

    if @compThrow == @yourThrow
      @response = "It's a draw!"
    elsif @compThrow == 'Rock'
      if @yourThrow == 'Paper'
        @response = "#{@yourThrow} wins"
      else
        @response = "#{@compThrow} wins"
      end
    elsif @compThrow == 'Scissors' && @yourThrow == 'Paper'
      @response = "#{@compThrow} wins"
    end

  end

end
