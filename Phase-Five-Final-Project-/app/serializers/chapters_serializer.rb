class ChaptersSerializer < ActiveModel::Serializer
  attributes :id, :chapter_number, :title, :body
  belongs_to :stories
end
