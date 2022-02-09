class CreateChapters < ActiveRecord::Migration[6.1]
  def change
    create_table :chapters do |t|
      t.integer :chapter_number
      t.string :title
      t.string :body

      t.timestamps
    end
  end
end
