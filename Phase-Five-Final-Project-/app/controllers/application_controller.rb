class ApplicationController < ActionController::Base
    include ActionController::Cookies
    
  
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    skip_before_action :verify_authenticity_token
    helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!, :set_user
        
    def login!
      
          session[:user_id] = @user.id
    end

    def logged_in?
          !!session[:user_id]
    end
    def current_user
          @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    def authorized_user?
           @user == current_user
    end
    def logout!
           session.clear
    end
    def set_user
        @user = User.find_by(id: session[:user_id])
    end

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
 
    def render_unprocessable_entity_response(record)
      return 
      render json: {errors: record.record.errors.full_messages }, status: 401
    end 

    def render_not_found_response
      render json: { error: "Object not found" }, status: :not_found
    end
end
