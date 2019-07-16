module Api
  class UserController < ApplicationController
    def index
      users = User.all
      render json: users
    end
  
    def show
      user = User.find(params[:id])
      user_response = {user: user}
      if params[:include] == 'avatar'
        url = user.avatar.attached? ? url_for(user.avatar) : ""
        user_response[:avatar] = url
      end
      render json: user_response
    end
  
    def avatar_url
      begin
      user = User.find(params[:user_id])
      url = user.avatar.attached? ? url_for(user.avatar) : ""
      render json: url  
  
      rescue
        render json: '/assets/default.png'
      end
    end 
  end
end