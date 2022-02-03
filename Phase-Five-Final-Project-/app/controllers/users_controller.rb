class UsersController < ApplicationController
    
    def index 
        users = User.all
        render json: users 
    end
        
    def show
        render json: @current_user, status: :accepted
    end
        
    
    def create 
        parameters = user_params.to_h
        if parameters[:profile_picture].blank? then 
            parameters.delete(:profile_picture)
        end

        user = User.create!(parameters)
        session[:user_id] = user.id
        render json: user, status: :created 
        
    end 
    private 
    def user_params
        params.permit(:username, :password, :bio, :admin, :profile_picture, :email_address)
    end 

end
