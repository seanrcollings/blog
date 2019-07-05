Rails.application.routes.draw do
  root "main#index"
  
  devise_for :users, :controllers => {:registrations => "registrations"}
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  
  resources :posts, only: [:index, :create, :new, :show, :destroy, :update]
  
  scope :author do
    get '/', to: redirect('/authors')
    get '/:id', to: 'main#index'
  end 
  
  scope :authors do
    get ':id/posts', to: 'authors#posts'
    get '/', to: 'main#index'
    get '/all', to: 'authors#index'
    get '/:id', to: 'authors#show'
  end 
  
  get '/user/:id/avatar', to: 'user#avatar_url'
  get '/post/:id', to: 'main#index'
  get '/login', to: 'main#index'
  get '/signup', to: 'main#index'
  get '/post', to: 'main#index'
  # get '*path', to: 'main#index'

end
