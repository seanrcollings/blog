class MainController < ApplicationController
  def index
    gon.user = current_user
  end
end


