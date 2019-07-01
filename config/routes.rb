Rails.application.routes.draw do
  root "main#index"
  
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  
  resources :posts, only: [:index, :create, :new, :show, :destroy, :update]
  get '/post/:id', to: 'main#index'
  get '/login', to: 'main#index'
  

  # get '*path', to: 'main#index'

end
