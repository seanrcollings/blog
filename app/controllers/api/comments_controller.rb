module Api
  class CommentsController < ApplicationController
    def index
      comments = Comment.all
      render json: comments
    end
    
    def show
      comments = Comment.all.where(post_id: params[:id], parent_comment_id: nil).order(created_at: :desc).as_json
      render json: comments
    end

    def show_replies 
      replies = Comment.all.where(parent_comment_id: params[:comment_id])
      render json: replies
    end
  
    def create
      comment = Comment.new(create_comment_params)
      puts params
  
      if comment.save
        render json: comment
      else
        render json: { status: :failed, errors: comment.errors }, status: :bad_request
      end
    end

    def destroy
      puts params
      comment = Comment.find(params[:id])
      comment.destroy
      head :ok
    end
  
    private
    def create_comment_params
      params.require(:comment).permit(:content, :user_id, :post_id, :parent_comment_id)
    end
  
  end 
end