class AddStoryIdToGenres < ActiveRecord::Migration[6.1]
  def change
    add_column :genres, :story_id, :integer
  end
end
