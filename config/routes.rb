Rails.application.routes.draw do
  root "main#index"
  
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  
  resources :posts, only: [:index, :create, :new, :show, :destroy, :update]
  get ':authors/:id/posts', to: 'authors#posts'
  
  scope :author do
    get '/', to: redirect('/authors')
    get '/:id', to: 'main#index'
  end 
  
  scope :authors do
    get '/', to: 'main#index'
    get '/all', to: 'authors#index'
    get '/:id', to: 'authors#show'
  end 
    
  get '/post/:id', to: 'main#index'
  get '/login', to: 'main#index'
  # get '*path', to: 'main#index'

end
