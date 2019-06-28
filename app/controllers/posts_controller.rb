class PostsController < ApplicationController
  def index
    posts = Post.order(created_at: :desc)
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end
  
  def create
    post = Post.new(create_post_params)

    if post.save
      render json: post
    else
      render json: { status: :failed, errors: post.errors }, status: :bad_request
    end
  end

  def update
    post = Post.find(params[:id])
    post.assign_attributes(update_post_params)
    if post.save
      render json: post
    else
      render json: { status: :failed, errors: post.errors }, status: :bad_request
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    head :ok
  end

  private

  def create_post_params
    params.require(:post).permit(:title, :subtitle, :content)
  end

  def update_post_params
    params.require(:post).permit(:title, :subtitle, :content)
  end
end


