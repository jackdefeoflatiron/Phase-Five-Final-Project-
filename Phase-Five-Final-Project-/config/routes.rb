Rails.application.routes.draw do
  resources :styles, only: [:index, :show, :destroy, :create]
  resources :stories, only: [:index, :show, :destroy, :update, :create]
  resources :chapters, only: [:index, :show, :destroy, :update, :create]
  resources :reviews, only: [:index, :destroy, :update, :create]
  resources :genres, only: [:index, :show, :destroy, :create]
  resources :users, only: [:index, :show, :destroy, :update, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

post '/users',         to: 'users#create'
get '/users/:user_id', to: 'users#show'
post '/user-login',         to: 'sessions#create'
get '/users',          to: 'users#index'

resources :users, only: [:create, :show, :index] do 
  resources :items, only: [:create, :show, :index, :destroy]
end
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
