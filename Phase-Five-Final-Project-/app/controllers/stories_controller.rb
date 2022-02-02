class StoriesController < ApplicationController
    has_many :chapters 
    belongs_to :user
    has_many :reviews, through: :users
    has_one :style 
    has_one :genre 
end
