class AddStoryIdToStyles < ActiveRecord::Migration[6.1]
  def change
    add_column :styles, :story_id, :integer
  end
end
