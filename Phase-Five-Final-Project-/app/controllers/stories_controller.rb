class StoriesController < ApplicationController
    
    def index
        stories = Story.all
        render :json stories, status: :ok
    end 

    def show
        stories = find_story
        render json: stories
    end 

    def update
        
    end 

    def create 
        story = Story.create!(story_params)
    end 

    def destroy
        stories = find_story
        stories.destory 
    end 
    private 
    def find_story
        Story.find(params[:story_name, :author, :age_group])
    end

    def story_params
        params.permit(:)
    end 
end
