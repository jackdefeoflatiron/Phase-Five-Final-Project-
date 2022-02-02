class GenreSerializer < ActiveModel::Serializer
  attributes :id, :genre
  belongs_to :stories
end
