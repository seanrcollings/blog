Rails.application.routes.draw do
  root "main#index"

  resources :posts, only: [:index, :create, :new, :show]
  get '/post/:id', to: 'main#index'

  get '*path', to: 'main#index'

end
