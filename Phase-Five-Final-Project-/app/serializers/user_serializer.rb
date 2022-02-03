class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :admin, :profile_picture, :bio
end
