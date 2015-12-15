class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def destroy
    @bench = Bench.find(params[:id])
    @bench.destroy
    render :show
  end

  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
