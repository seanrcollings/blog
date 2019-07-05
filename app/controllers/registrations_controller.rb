class RegistrationsController < Devise::RegistrationsController
  def create
    puts 'hello!'
    user = User.create(sign_up_params)

    if user.save
      render json: user
    else
      render json: { status: :failed, errors: user.errors }, status: :bad_request
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :avatar)
  end
end