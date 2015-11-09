class CreateMazeLevels < ActiveRecord::Migration
  def change
    create_table :maze_levels do |t|
      t.integer :maze_level
      t.integer :start_posH
      t.integer :start_posV
      t.integer :finish_posH
      t.integer :finish_posV

      t.timestamps null: false
    end
  end
end
