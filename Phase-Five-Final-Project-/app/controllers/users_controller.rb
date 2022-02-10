class UsersController < ApplicationController
    
    def index 
        @users = User.all
           if @users
              render json: {
              users: @users
           }
          else
              render json: {
              status: 500,
              errors: ['no users found']
          }
         end
    end
        
    def show
        @user = User.find(params[:id])
           if @user
              render json: {
              user: @user
           }
           else
              render json: {
              status: 500,
              errors: ['user not found']
            }
           end
    end

    def update 
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: user 
    end 
        
    
    def create 
        @user = User.new(user_params)
        if @user.save
            login!  
            render json: {
            status: :created,
            user: @user
        }
       else 
           render json: {
           status: 500,
           errors: @user.errors.full_messages
       }
       end
        
    end 

    def destroy 
        user = find_user
        user.destroy 
    end 
    private 
    def user_params
        params.permit(:username, :password, :bio, :admin, :profile_picture, :email_address, )
    end 
    def find_user 
        User.find(params[:id])
    end 

end
