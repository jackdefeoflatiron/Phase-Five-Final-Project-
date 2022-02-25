class GenreSerializer < ActiveModel::Serializer
  attributes :id, :genre, :story_id
end
