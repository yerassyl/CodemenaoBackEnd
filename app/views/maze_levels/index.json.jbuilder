json.array!(@maze_levels) do |maze_level|
  json.extract! maze_level, :id
  json.url maze_level_url(maze_level, format: :json)
end
