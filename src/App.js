import "./App.css";
import UserList from "./Components/UserList";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import withSearch from "./HOC/SearchHOC";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getUsers();
    getProducts();
  }, []);

  const ProductListWithSearch = withSearch(ProductList);
  const UserListWithSearch = withSearch(UserList);

  const getUsers = () => {
    fetch("/api/users").then((res) =>
      res
        .json()
        .then((data) => setUsers(data.users))
        .catch((error) => console.log("Error occured while fetching data!"))
    );
  };

  const getProducts = () => {
    fetch("/api/products").then((res) =>
      res
        .json()
        .then((data) => setProducts(data.products))
        .catch((error) => console.log("Error occured while fetching data!"))
    );
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element=<Home />></Route>
          <Route
            path="/users"
            element=<UserListWithSearch data={users} />
          ></Route>
          <Route
            path="/products"
            element=<ProductListWithSearch data={products} />
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
