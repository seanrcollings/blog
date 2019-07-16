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
      posts = User.find(params[:author_id]).posts.order(created_at: :desc)
      user_response = { posts: posts }
      if params[:include] == 'avatar' 
        author = User.find(params[:author_id])
        user_response[:avatar] = author.avatar.attached? ? url_for(author.avatar) : ""
      end     
      render json: user_response
    end
  end
end

