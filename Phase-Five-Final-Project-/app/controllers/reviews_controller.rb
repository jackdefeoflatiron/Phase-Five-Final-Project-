class ReviewsController < ApplicationController
    belongs_to :stories, through: :user 
end
