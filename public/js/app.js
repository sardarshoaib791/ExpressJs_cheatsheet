const App = () => {
  const [products, setProducts] = React.useState([]);
  const [form, setForm] = React.useState({
    name: "",
    price: "",
  });

  React.useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.price) {
      return;
    }
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        fetchProducts();
        setForm({ name: "", price: "" });
      });
  }

  const deleteProduct = (productId) => {
    fetch(`/api/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        fetchProducts();
        console.log(data);
      });
  };

  function updateForm(event, field) {
    setForm({
      ...form,
      [field]: event.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={form.name}
            onChange={(event) => updateForm(event, "name")}
            className="form-control"
            placeholder="Name of product"
          />
        </div>
        <div className="form-group mt-1">
          <input
            type="text"
            value={form.price}
            onChange={(event) => updateForm(event, "price")}
            className="form-control"
            placeholder="Price"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-1">
          Submit
        </button>
      </form>

      <ul className="list-group mt-5">
        {products.map((product, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-item-center"
            key={product.id}
          >
            <div>{`${index + 1} -- ${product.name} --- ${product.price}`}</div>
            <button
              className="btn btn-danger"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
