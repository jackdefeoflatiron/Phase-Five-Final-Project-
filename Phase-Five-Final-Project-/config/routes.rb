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
end
