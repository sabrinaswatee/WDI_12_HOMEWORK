=begin
Movies 3: Return of Son of Movies
A more more advanced version of the Movies Sinatra App

Summary

The people at OMDB have complained that our site is making too many requests for Jaws.
Update your movies app to store OMDB data in your own local database.

The first time a movie is searched for, your app will put results from OMDB as before.
But those results will need to be stored locally so that subsequent requests for the
same title can be served from YOUR database, without bothering the OMDB guys again.
=end

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'

def run_sql(sql)
  db_conn = PG.connect(dbname: 'movies_db')
  result = db_conn.exec(sql)
  db_conn.close
  result
end

get '/' do
  erb :index
end

def get_movie(list)
  title = list["Title"]
  director = list["Director"]
  released = list["Released"]
  summary = list["Plot"]
  poster = list["Poster"]

  sql = "INSERT INTO movies (title, director, released, summary, poster, clickcounts) "
  sql += "VALUES ('#{title}', '#{director}', '#{released}', '#{summary}', '#{poster}', 0);"
  run_sql(sql)
end

get '/movie_list' do
  name = params[:title]
  @list = HTTParty.get("http://www.omdbapi.com/?s=#{name}&apikey=2f6435d9").parsed_response["Search"]
  if (@list.length == 1)
    imdb_id = HTTParty.get("http://www.omdbapi.com/?t=#{name}&apikey=2f6435d9")["imdbID"]
    list = HTTParty.get("http://www.omdbapi.com/?i=#{imdb_id}&apikey=2f6435d9")

    if run_sql("SELECT * FROM movies WHERE title = '#{name}';") == []
      # title = @list["Title"]
      # director = @list["Director"]
      # released = @list["Released"]
      # summary = @list["Plot"]
      # poster = @list["Poster"]
      #
      # sql = "INSERT INTO movies (title, director, released, summary, poster, clickcounts) "
      # sql += "VALUES ('#{title}', '#{director}', '#{released}', '#{summary}', '#{poster}', 0);"
      # run_sql(sql)
      get_movie(list)
    end

    @list = run_sql("SELECT * FROM movies WHERE title = '#{name}';")
    erb :movie_details
  else
    erb :movie_list
  end
end

get '/movie_details/:title' do
  name = params[:title]
  # name = params[:title].gsub!("'", "''")
  imdb_id = HTTParty.get("http://www.omdbapi.com/?t=#{name}&apikey=2f6435d9")["imdbID"]
  list = HTTParty.get("http://www.omdbapi.com/?i=#{imdb_id}&apikey=2f6435d9")

  if run_sql("SELECT * FROM movies WHERE title = '#{name}';") == []
    # title = @list["Title"]
    # director = @list["Director"]
    # released = @list["Released"]
    # summary = @list["Plot"]
    # poster = @list["Poster"]
    #
    # sql = "INSERT INTO movies (title, director, released, summary, poster, clickcounts) "
    # sql += "VALUES ('#{title}', '#{director}', '#{released}', '#{summary}', '#{poster}', 0);"
    # run_sql(sql)
    get_movie(list)
  end

  @list = run_sql("SELECT * FROM movies WHERE title = '#{name}';")
  erb :movie_details
end
