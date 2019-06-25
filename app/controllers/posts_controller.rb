class PostsController < ApplicationController
  def index
    posts = Post.all
    render json: posts
  end

  def new
  end
end


