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

  get '/posts', to: 'main#index'
  get '/new-post', to: 'main#index'
  get '/posts/:id', to: 'main#index'
  
  get '/login', to: 'main#index'
  get '/signup', to: 'main#index'
  
  namespace :api do
    resources :authors, only: [:index, :show] do
      get 'posts', to: 'authors#posts'
    end
    
    resources :posts, only: [:index, :create, :new, :show, :destroy, :update] do
      get 'sort', to: 'posts#sort'
    end
    
    resources :comments do
      get 'replies', to: 'comments#show_replies'
    end
    
    resources :user do
      get 'avatar', to: 'user#avatar_url'
    end
  end
end
