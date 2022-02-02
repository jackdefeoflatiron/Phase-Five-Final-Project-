class UsersController < ApplicationController
    has_many :stories 
    has_many :reviews
    
end
