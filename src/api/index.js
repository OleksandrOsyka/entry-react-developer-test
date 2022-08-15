import { request, gql } from "graphql-request";

const endpoint = "http://localhost:4000/grapql";

export const fetchProduct = (id) => {
  const query = gql`
    query getProduct($id: String!) {
      product(id: $id) {
        id
        name
        inStock
        gallery
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  `;

  const variables = {
    id,
  };

  return request(endpoint, query, variables);
};

export const fetchProducts = (title) => {
  const query = gql`
    query getProducts($title: String!) {
      category(input: { title: $title }) {
        products {
          id
          name
          inStock
          gallery
          attributes {
            name
          }
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          brand
        }
      }
    }
  `;

  const variables = {
    title,
  };

  return request(endpoint, query, variables);
};

export const fetchCurrencies = () => {
  const query = `
  query getCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

  return request(endpoint, query);
};

export const fetchCategories = () => {
  const query = `
  query getCategories {
    categories {
      name
    }
  }
  `;

  return request(endpoint, query);
}
