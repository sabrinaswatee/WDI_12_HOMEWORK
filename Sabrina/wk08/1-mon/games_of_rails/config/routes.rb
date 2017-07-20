Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/games', to: 'games#index'
  get '/games/magic_8_ball', to: 'games#magic'
  get '/games/secret_number', to: 'games#secret'

  get '/games/rock_paper_scissors', to: 'games#rock'
  get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play'

end
