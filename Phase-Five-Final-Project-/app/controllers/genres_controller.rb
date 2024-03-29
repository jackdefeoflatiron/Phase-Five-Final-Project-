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

    def update
        genre = Genre.find_by(id: params[:id])
        genre.update(genre_params)
        render json: genre
    end 

    def destroy
        genre = find_genre
        genre.destroy
    end 

    private
    def find_genre
        Genre.find(params[:id])
    end 

    def genre_params
        params.permit(:genre, :story_id)
    end 
end
