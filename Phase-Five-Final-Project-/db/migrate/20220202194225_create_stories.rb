class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
      t.string :story_name
      t.string :age_group
      t.string :author


      t.timestamps
    end
  end
end
