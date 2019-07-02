class AuthorsController < ApplicationController
  def index
    authors = User.all.where(author: true)
    render json: authors
  end

  def show
    author = User.find(params[:id])
    render json: author
  end

  def posts
    posts = User.find(params[:id]).posts
    render json: posts
  end
end


