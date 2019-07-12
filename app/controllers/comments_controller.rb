class CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments
  end

  def show_replies 
    replies = Comment.all.where(parent_comment_id: params[:id])
    render json: replies
  end

  def create
    comment = Comment.new(create_comment_params)

    if comment.save
      render json: comment
    else
      render json: { status: :failed, errors: post.errors }, status: :bad_request
    end
  end

  private
  def create_comment_params
    params.require(:comment).permit(:content, :user_id, :post_id, :parent_comment_id)
  end

end 