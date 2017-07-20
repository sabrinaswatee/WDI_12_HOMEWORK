Rails.application.routes.draw do

  resources :articles

  get '/api/articles/:id', to: 'api/articles#show'

  get '/api/comments/:id', to: 'api/comments#show'

end
