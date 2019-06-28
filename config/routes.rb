Rails.application.routes.draw do
  root "main#index"

  resources :posts, only: [:index, :create, :new, :show, :destroy, :update]
  get '/post/:id', to: 'main#index'

  get '*path', to: 'main#index'

end
