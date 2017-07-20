class Api::CommentsController < ApplicationController

  def show
    @comments = Comment.where(article_id: params[:id])

    render json: @comments
  end

end
