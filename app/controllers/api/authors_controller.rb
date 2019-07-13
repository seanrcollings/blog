module Api
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
      puts params
      posts = User.find(params[:author_id]).posts.order(created_at: :desc)
      render json: posts
    end
  end
end

