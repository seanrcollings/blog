module Api
  class PostsController < ApplicationController
    def index
      posts = Post.all.order(created_at: :desc)
      post_response = {posts: posts}
      render json: post_response
    end
  
    def show
      post = Post.find(params[:id])
      post_response = { post: post }
      if params[:include] == "author"
        post_response[:author] = post.user.as_json
        post_response[:author][:avatar_url] = post.user.avatar.attached? ? url_for(post.user.avatar) : ""
      end
      render json: post_response
    end

    def sort      
      scope = params[:author] == 'all' ? Post.all.time(params[:time]) : Post.authored_by(params[:author]).time(params[:time])
      render json: scope
    end
    
    def create
      if current_user.author?
        post = Post.new(create_post_params)
        
        if post.save
          render json: post
        else
          render json: { status: :failed, errors: post.errors }, status: :bad_request
        end
      end
    end
  
    def update
      if current_user.author?
        post = Post.find(params[:id])
        post.assign_attributes(update_post_params)
        if post.save
          render json: post
        else
          render json: { status: :failed, errors: post.errors }, status: :bad_request
        end
      end
    end
  
    def destroy
      if current_user.author?
        post = Post.find(params[:id])
        post.destroy
        head :ok
      end
    end
  
    private
  
    def create_post_params
      params.require(:post).permit(:title, :subtitle, :content, :user_id)
    end
  
    def update_post_params
      params.require(:post).permit(:title, :subtitle, :content)
    end
  end
end  