class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews 
    end


    def create 
        reviews = Review.create!(reviews_params)
        render json: reviews 
    end 

    def destroy 
        review = find_review
        
    end

    private 
    def reviews_params
        params.permit(:review, :rating)
    end
end
