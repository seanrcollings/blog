class PostsController < ApplicationController
  def index
    posts = []
    Post.order(created_at: :desc).each do |post|
      posts.push({author: post.user, post: post})
    end
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def show_comments
    comments = Comment.all.where(post_id: params[:id], parent_comment_id: nil).order(created_at: :desc)
    render json: comments
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


