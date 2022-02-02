class ReviewsController < ApplicationController
    belongs_to :stories, through: :stories
end
