class Story < ApplicationRecord

    def index
        stories = Story.all
        render :json stories, status: :ok
    end 
end
