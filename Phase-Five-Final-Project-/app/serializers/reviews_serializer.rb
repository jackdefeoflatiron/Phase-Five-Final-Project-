class ReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review
end
