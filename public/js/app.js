const App = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetchProducts();
  }, []);
  function fetchProducts() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }

  return (
    <>
      <ul className="list-group">
        {products.map((product, i = indexNumber) => (
          <li className="list-group-item" key={product.id}>{`${i + 1} -- ${
            product.name
          } --- ${product.price}`}</li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
