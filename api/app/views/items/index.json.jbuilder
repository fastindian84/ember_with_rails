json.items do
  json.array!(@items) do |item|
    json.extract! item, :id, :title, :description, :price, :image_src, :cart_id
  end
end
