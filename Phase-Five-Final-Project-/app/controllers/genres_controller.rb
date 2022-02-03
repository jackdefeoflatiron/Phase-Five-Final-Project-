class GenresController < ApplicationController
    def show 
        genres = find_genre 
        render json: genres
    end

    def create 
        genre = Genre.create!(genre_params)
        render json: genre
    end 

    def index 
        genres = Genre.all
        render json: genres 
    end 

    private
    def find_genre
        Genre.find(params[:id])
    end 

    def genre_params
        params.permit(:genre)
    end 
end
