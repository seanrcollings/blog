class UserController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def avatar_url
    user = User.find(params[:id])
    url = user.avatar.attached? ? url_for(user.avatar) : ""
    render json: url
  end 
end