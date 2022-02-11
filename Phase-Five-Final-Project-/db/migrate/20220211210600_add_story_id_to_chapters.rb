class AddStoryIdToChapters < ActiveRecord::Migration[6.1]
  def change
    add_column :chapters, :story_id, :integer
  end
end
