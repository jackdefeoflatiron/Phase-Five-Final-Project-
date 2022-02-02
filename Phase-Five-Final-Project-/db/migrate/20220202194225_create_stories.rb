class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :story_name
      t.string :age_group

      t.timestamps
    end
  end
end
