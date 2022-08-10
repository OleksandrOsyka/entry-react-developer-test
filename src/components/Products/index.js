import React from "react";
import { connect } from "react-redux";

import withRouter from "../../hoc/withRouter";
import { getProducts } from "../../actions";
import ProductCard from "./ProductCard";
import "./style.css";

class Products extends React.Component {
  loadProducts = () => {
    const { categoryId } = this.props.router.params;
    this.props.dispatch(getProducts(categoryId));
  };

  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.router.params.categoryId !== prevProps.router.params.categoryId
    ) {
      this.loadProducts();
    }
  }

  componentWillUnmount() {
    this.props.dispatch({ type: "CLEAR_PRODUCTS" });
  }

  render() {
    const { categoryId } = this.props.router.params;
    const { products } = this.props;
    
    return (
      <div className="Products">

        <div className="Products_heading">{categoryId}</div>
        
        {products && (
          <div className="Products_grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  currency: state.currency,
});

export default withRouter(connect(mapStateToProps)(Products));
