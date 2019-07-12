class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.integer :parent_comment_id
      t.integer :comments, array: true, default: []
      t.string :content, null: false
      t.timestamps
    end
  end
end
