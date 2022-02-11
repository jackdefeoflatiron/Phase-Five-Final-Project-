class StylesController < ApplicationController
    def show
        style = find_style
        render json: style
    end 

    def create
        style = Style.create!(style_params)
        render json: style 
    end 

    def destroy
        style = find_style
        style.destroy 
    end 

    def index
        styles = Style.all
        render json: styles 
    end 

    private
    def find_style
        Style.find(params[:id])
    end 

    def style_params
        params.permit(:style, :story_id)
    end 
end
