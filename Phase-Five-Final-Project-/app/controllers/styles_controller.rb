class StylesController < ApplicationController
    def show
        style = find_style
        render json: style
    end 

    private
    def find_style
        Style.find(params[:style])
    end 
end
