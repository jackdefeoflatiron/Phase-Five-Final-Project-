class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :admin, :profile_picture, :bio
  has_many :stories
  has_many :reviews, through: :stories
end
