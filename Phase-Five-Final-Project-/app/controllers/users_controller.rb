class UsersController < ApplicationController
    
    def index 
        users = User.all
        render json: users 
    end
        
    def show
        render json: @current_user, status: :accepted
    end

    def update 
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: user 
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

    def destroy 
        user = find_user
        user.destroy 
    end 
    private 
    def user_params
        params.permit(:username, :password, :bio, :admin, :profile_picture, :email_address)
    end 
    def find_user 
        User.find(params[:id])
    end 

end
