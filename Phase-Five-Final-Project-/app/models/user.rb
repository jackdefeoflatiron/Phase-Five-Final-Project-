class User < ApplicationRecord
    has_many :stories 
    has_many :reviews, through: :stories 


    validates :username, presence: true, uniqueness:  :true
    validates :password, presence: true, length: { minimum: 6, maximum:15 }
    validates :bio, length: {maximum: 500 }
end
