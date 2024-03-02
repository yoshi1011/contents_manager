Rails.application.routes.draw do
  devise_for :providers,
             controllers: { registrations: 'providers/registrations', sessions: 'providers/sessions',
                            confirmations: 'providers/confirmations', passwords: 'providers/passwords',
                            unlocks: 'providers/unlocks' }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  resources :dashboards, only: :index

  resource :organization, only: %i[new create show edit update]

  # Defines the root path route ("/")
  root 'home#index'
end
