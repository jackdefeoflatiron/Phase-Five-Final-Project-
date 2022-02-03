class StylesController < ApplicationController
    def show
        style = find_style
        render json: style
    end 

    def destroy
        style = find_style
        style.destroy 
    end 

    private
    def find_style
        Style.find(params[:id])
    end 
end
