const products = [
  { id: 1, name: "Lipstick", price: 299 },
  { id: 2, name: "Face Cream", price: 499 },
  { id: 3, name: "Perfume", price: 999 },
];

export default function Products() {
  return (
    <div className="container mt-4">
      <h2>Products</h2>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-3" key={p.id}>
            <div className="card p-3 shadow-sm">
              <h5>{p.name}</h5>
              <p>₹{p.price}</p>
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
