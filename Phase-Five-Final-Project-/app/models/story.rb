class Story < ApplicationRecord
    has_many :chapters 
    belongs_to :user
    has_many :reviews, through: :users
    has_many :styles
    has_many :genres
end
