class StoriesController < ApplicationController
    
    def index
        stories = Story.all
        render json: stories, status: :ok, each_serializer: StoriesSerializer
    end 

    def show
        stories = Story.find( params[:id])
        render json: stories
    end 

    def update
        story = Story.find_by(id: params[:id])
        story.update(story_update_params)
        render json: story 
    end 

    def create 
        story = Story.create!(story_params)
        genre = story.genres.create!(genre_params)
        style = story.styles.create!(style_params)
        chapter = story.chapters.create!(chapter_params)
        render json: story

    end 

    def destroy
        story = Story.find( params[:id])
        story.destroy 
        head :no_content
    end 
    private 
    def find_story
        Story.find(params[:story_id])
        Style.find(params[:story_id])
        Genre.find(params[:story_id])
        Chapter.find(params[:story_id])
    end

    def story_params
        params.permit(:story_name, :author, :age_group, :user_id)
    end 
    def story_update_params
        params.permit(:story_name, :author, :age_group, :user_id, :id)
    end

    def genre_params
        params.permit(:genre, :story_id)
    end 

    def style_params
        params.permit(:style, :story_id)
    end 
    def chapter_params
        params.permit(:chapter_number, :title, :body, :story_id)
    end
end
