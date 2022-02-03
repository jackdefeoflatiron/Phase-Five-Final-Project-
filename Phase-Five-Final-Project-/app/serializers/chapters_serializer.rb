class ChaptersSerializer < ActiveModel::Serializer
  attributes :id, :chapter_number, :title, :body
end
