class Api::V1::UsersController < ApplicationController
  def index
    if user_signed_in?
      render json: { user: true }
    else
      render json: { user: false }
    end
  end
end
