class ChaptersController < ApplicationController
    def index
        chapters = Chapter.all
        render json: chapters
    end
    
    def update 
        chapter = Chapter.find_by(id: params[:id])
        chapter.update(chapter_params)
        render json: chapter
    end 

    def show 
        chapter = find_chapter
        render json: chapter 
    end 

    def create
        chapter = Chapter.create!(chapter_params)
        render json: chapter 
    end

    def destroy
        chapter = find_chapter
        chapter.destroy
    end 
    
    private 
    def chapter_params
        params.permit(:chapter_number, :title, :body, :story_id)
    end

    def find_chapter
        Chapter.find(params[:id])
    end 
end
