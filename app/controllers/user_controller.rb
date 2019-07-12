class UserController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def avatar_url
    begin
    user = User.find(params[:id])
    url = user.avatar.attached? ? url_for(user.avatar) : ""
    render json: url

    rescue
      render json: '/assets/default.png'
    end
  end 
end