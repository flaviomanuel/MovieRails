module Api 
    module V1
        class MovieController < ApplicationController

            def index
                begin
				    movies = Movie.order('created_at DESC');
                    render json: {status: 'SUCCESS', message:'loaded movies', data:movies},status: :ok
                rescue ActiveRecord::RecordNotFound => e
                    render json: {status: 'ERROR', message:'not loaded movies', data:e},status: :not_found
                
                end

			end


            def create
                movie = Movie.new(movies_params)
                if movie.save 
                    render json: {status: 'SUCESS', message: 'created movie', data:movie},status: :created
                else 
                    render json: {status: 'ERROR', message: 'not created movie' },status: :bad_request
                end
            end

            def show 
                begin
                    movie = Movie.find(params[:id])
                    render json: {status: 'SUCCESS', message:'filmes carregados', data:movie},status: :ok
                rescue ActiveRecord::RecordNotFound => e
                    render json: {status: 'ERROR', message:'filmes não encontrados', data:e},status: :not_found
                end
            end

            def update
                movie = Movie.find(params[:id])
                if movie.update(movies_params)
                    render json: {status: 'SUCCESS', message:'updated movie', data:movie},status: :ok  
                else
                    render json: {status: 'ERROR', message:'movie not update', data:movie.erros},status: :bad_request
                end
            end

            def findByName    
                paramsSerialized = params[:title].gsub('+', ' ')
                movies = Movie.all.where("name ILIKE ?", "%#{paramsSerialized}%")
                if movies.empty?
                    render json: {status: 'ERROR', message:'movies with this name not found', data:movies},status: :not_found
                else
                    render json: {status: 'SUCCESS', message: 'movies found', data:movies},status: :ok  
                end
            end

            def findByDirector
                paramsSerialized = params[:director].gsub('+', ' ')
                movies = Movie.all.where("director ILIKE ?", "%#{paramsSerialized}%")
                if movies.empty?
                    render json: {status: 'ERROR', message:'movies not found', data:movies},status: :not_found
                else
                    render json: {status: 'SUCCESS', message: 'movies found', data:movies},status: :ok  
                end
            end


            private
            def movies_params
                params.permit(:name,:release_date,:synopsis ,:director,:score)
            end

        end
    end
end