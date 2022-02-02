class ReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review
  belongs_to :stories, through: :user
end
