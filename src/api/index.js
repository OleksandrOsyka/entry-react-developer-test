const endpoint = "http://localhost:4000/grapql";

export const fetchProduct = (id) => {
    
  const QUERY = `
{
    product(id: "${id}"){
      name
      id
    }
  }
`;

  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY }),
  });
};