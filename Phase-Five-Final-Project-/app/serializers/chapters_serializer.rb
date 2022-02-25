class ChaptersSerializer < ActiveModel::Serializer
  attributes :id, :chapter_number, :title, :body, :story_id
end
