class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email_address
      t.string :password
      t.boolean :admin
      t.string :profile_picture
      t.string :bio

      t.timestamps
    end
  end
end
