class Story < ApplicationRecord
    has_many :chapters, dependent: :destroy
    belongs_to :user
    has_many :styles, dependent: :destroy
    has_many :genres, dependent: :destroy
    has_many :reviews, through: :users
end
