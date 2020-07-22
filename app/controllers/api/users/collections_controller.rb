class Api::Users::CollectionsController < ApplicationController

  def index
<<<<<<< HEAD
    user = User.find(params[:user_id])  
    render json: user.collections
=======
    @user = User.find(params[:user_id])
    render json: @user.collections
>>>>>>> 529788edc92ca483616cb26405dd3a9d2e6f00fb
  end
  
  def show
    @user = User.find(params[:user_id])
    render json: @user.collections.find(params[:id])
  end

  def create
    @user = User.find(params[:user_id])
    collection = @user.collections.new(collection_params)
    if collection.save 
      render json: collection
    else 
      render json: { errors: collection.errors }, status: :unprocessable_entity 
    end
  end

  def update
    collection = Collection.find(params[:id])
    if collection.update(collection_params)
      render json: collection
    else 
      render json: { errors: collection.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    User.find(params[:id]).destroy
    render json: {message: 'Delete Successful' }
  end

  private

  def collection_params
    params.require(:collection).permit(:title, :description, :user_id)
  end

end
