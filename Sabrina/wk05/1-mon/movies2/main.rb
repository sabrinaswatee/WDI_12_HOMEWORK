
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/movie_list' do
  name = params[:title]
  @list = HTTParty.get("http://www.omdbapi.com/?s=#{name}&apikey=2f6435d9").parsed_response["Search"]
  if (@list.length == 1)
    erb :movie_details
  else
    erb :movie_list
  end
end

get '/movie_details/:title' do
  movie_name = params[:title]
  @list = HTTParty.get("http://www.omdbapi.com/?t=#{movie_name}&apikey=2f6435d9")
  erb :movie_details
end
