Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do 
      resources :movie
     
      get 'movie/findbyname/:title', controller: 'movie', action: 'findByName'
      get 'movie/findbydirector/:director', controller: 'movie', action: 'findByDirector'
      # post 'movies/', controller: 'movie', action: 'create'
      
      
    end 
  end
end
