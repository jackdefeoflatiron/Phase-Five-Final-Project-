Rails.application.routes.draw do
  resources :styles, only: 
  resources :stories
  resources :chapters
  resources :reviews
  resources :genres
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
