json.cart do
  json.extract! @cart, :id, :created_at, :updated_at
end
