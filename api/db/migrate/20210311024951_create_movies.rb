class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.date :release_date
      t.string :synopsis
      t.string :director
      t.integer :score, limit: 5

      t.timestamps
    end
  end
end
