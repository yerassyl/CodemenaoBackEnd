class MazeLevelsController < ApplicationController
  before_action :set_maze_level, only: [:show, :edit, :update, :destroy]

  # GET /maze_levels
  # GET /maze_levels.json
  def index

  end

  # GET /maze_levels/1
  # GET /maze_levels/1.json
  def show
  end

  # GET /maze_levels/new
  def new
    @maze_level = MazeLevel.new
  end

  # GET /maze_levels/1/edit
  def edit
  end

  # POST /maze_levels
  # POST /maze_levels.json
  def create
    @maze_level = MazeLevel.new(maze_level_params)

    respond_to do |format|
      if @maze_level.save
        format.html { redirect_to @maze_level, notice: 'Maze level was successfully created.' }
        format.json { render :show, status: :created, location: @maze_level }
      else
        format.html { render :new }
        format.json { render json: @maze_level.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /maze_levels/1
  # PATCH/PUT /maze_levels/1.json
  def update
    respond_to do |format|
      if @maze_level.update(maze_level_params)
        format.html { redirect_to @maze_level, notice: 'Maze level was successfully updated.' }
        format.json { render :show, status: :ok, location: @maze_level }
      else
        format.html { render :edit }
        format.json { render json: @maze_level.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /maze_levels/1
  # DELETE /maze_levels/1.json
  def destroy
    @maze_level.destroy
    respond_to do |format|
      format.html { redirect_to maze_levels_url, notice: 'Maze level was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_maze_level
      @maze_level = MazeLevel.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def maze_level_params
      params[:maze_level]
    end
end
