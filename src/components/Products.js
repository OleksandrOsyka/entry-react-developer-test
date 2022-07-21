import React from "react";
import withRouter from "../hoc/withRouter";

const endpoint = "http://localhost:4000/grapql";
const QUERY = `
{
    category{
      products{
        name
        attributes{
          name
          type
          items{
            displayValue
            value
          }
        }
      }
    }
  }
`;

const List = ({ list }) =>
  list.map((item) => <Item item={item} />);

const Item = ({ item }) => (
  <div>
    
    <span>

    </span>
    <span>{item.name}</span>
  </div>
);

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
    })
      .then((response) => response.json())
      .then((data) => this.setState(data));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { categoryId } = this.props.router.params;
    return (
      <div>
        <h1>Products</h1>
        <h2>category: {categoryId}</h2>
        {this.state.data ? 
        <List list={this.state.data.category.products} /> :
        <span>loading</span>}
      </div>
    );
  }
}

export default withRouter(Products);
