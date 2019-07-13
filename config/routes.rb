Rails.application.routes.draw do
  root "main#index"
  
  devise_for :users, :controllers => {:registrations => "registrations"}
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  
  
  scope :authors do
    get '/', to: 'main#index'
    get '/:id', to: 'main#index'
  end

  get '/comments/:id/replies', to: 'comments#show_replies'
  post '/comments', to: 'comments#create'

  get '/user/:id/avatar', to: 'user#avatar_url'
  get '/user/:id', to: 'user#show'

  get '/post', to: 'main#index'
  get '/post/:id', to: 'main#index'
  
  get '/login', to: 'main#index'
  get '/signup', to: 'main#index'
  
  namespace :api do
    resources :authors, only: [:index, :show] do
      get 'posts', to: 'authors#posts'
    end
    
    resources :posts, only: [:index, :create, :new, :show, :destroy, :update] do
      get 'comments', to: 'posts#show_comments'
    end
  end

  
end
