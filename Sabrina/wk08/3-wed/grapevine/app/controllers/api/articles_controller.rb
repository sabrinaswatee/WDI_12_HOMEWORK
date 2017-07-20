class Api::ArticlesController < ApplicationController

  def show
    @article = Article.find(params[:id])

    render json: {
      title: @article.title,
      histogram: @article.process_article
    }
  end

end
