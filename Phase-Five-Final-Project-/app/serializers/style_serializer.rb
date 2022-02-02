class StyleSerializer < ActiveModel::Serializer
  attributes :id, :style
  belongs_to :stories
end
