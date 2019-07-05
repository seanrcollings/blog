class AuthorsController < ApplicationController
  def index
    authors = User.all.where(author: true)
    render json: authors
  end

  def show
    author = User.find(params[:id])
    url = author.avatar.attached? ? url_for(author.avatar) : ""
    render json: {author: author, avatar: url}  
  end

  def posts
    posts = User.find(params[:id]).posts
    render json: posts
  end
end


