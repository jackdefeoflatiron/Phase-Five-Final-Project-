class StoriesSerializer < ActiveModel::Serializer
  attributes :id, :author, :age_group, :story_name, :user_id
  has_many :genres, serializer: GenreSerializer
  has_many :styles
  has_many :chapters
  
  # has_many :reviews
end
