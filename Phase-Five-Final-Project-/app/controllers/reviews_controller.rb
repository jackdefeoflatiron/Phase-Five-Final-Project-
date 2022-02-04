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
        review.destroy
    end

    def update 
        review = Review.find_review(id: params[:id])
        review.update(reviews_params)
        redner json: review 
    end 

    private 
    def reviews_params
        params.permit(:review, :rating)
    end

    def find_review
        Review.find(params[:id])
    end
end
