require 'test_helper'

class MazeLevelsControllerTest < ActionController::TestCase
  setup do
    @maze_level = maze_levels(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:maze_levels)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create maze_level" do
    assert_difference('MazeLevel.count') do
      post :create, maze_level: {  }
    end

    assert_redirected_to maze_level_path(assigns(:maze_level))
  end

  test "should show maze_level" do
    get :show, id: @maze_level
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @maze_level
    assert_response :success
  end

  test "should update maze_level" do
    patch :update, id: @maze_level, maze_level: {  }
    assert_redirected_to maze_level_path(assigns(:maze_level))
  end

  test "should destroy maze_level" do
    assert_difference('MazeLevel.count', -1) do
      delete :destroy, id: @maze_level
    end

    assert_redirected_to maze_levels_path
  end
end
