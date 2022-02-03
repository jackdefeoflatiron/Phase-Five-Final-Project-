class Review < ApplicationRecord
    belongs_to :stories, through: :user 
end
