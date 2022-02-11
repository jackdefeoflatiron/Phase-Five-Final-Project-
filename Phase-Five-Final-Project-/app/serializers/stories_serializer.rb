class StoriesSerializer < ActiveModel::Serializer
  attributes :id
  has_many :genres
  has_many :styles
  has_many :chapters
  has_many :reviews
end
