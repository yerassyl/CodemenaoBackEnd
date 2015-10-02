class CreateMazeLevels < ActiveRecord::Migration
  def change
    create_table :maze_levels do |t|

      t.timestamps null: false
    end
  end
end
