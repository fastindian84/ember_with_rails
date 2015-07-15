class OrdersController < ApplicationController
  def index
    render json: { orders: Cart.all.map {|o| { id: o.id, item_ids: o.item_ids } } }
  end
end
