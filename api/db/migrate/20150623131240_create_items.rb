class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.text :description
      t.string :image_src
      t.integer :price
      t.belongs_to :cart, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
