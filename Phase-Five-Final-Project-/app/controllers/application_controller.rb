class ApplicationController < ActionController::Base
    include ActionController::Cookies
    before_action :authorize
  
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    private
     
    def authorize
      @current_user = User.find_by(id: session[:user_id])
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end
     
    def render_not_found_response(exception) 
        render json: { errors: "#{exception.model} not found or User not Authorized" }, status: :not_found 
    end
  
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end 
end
