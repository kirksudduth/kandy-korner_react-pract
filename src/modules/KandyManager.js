const remoteURL = "http://localhost:5002";

export default {
  getProductsWithProductType() {
    return fetch(
      `${remoteURL}/products?_expand=productType&_embed=productLocations`
    ).then((result) => result.json());
  },
  getProductWithProductType(id) {
    return fetch(
      `${remoteURL}/products/${id}?_expand=productType&_embed=productLocations`
    ).then((result) => result.json());
  },
  getEmployees() {
    return fetch(`${remoteURL}/employees`).then((result) => result.json());
  },
  getEmployeeByUsername(username) {
    return fetch(`${remoteURL}/employees?username=${username}`).then((result) =>
      result.json()
    );
  },
  getLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`).then((result) =>
      result.json()
    );
  },
  getLocations() {
    return fetch(`${remoteURL}/locations`).then((result) => result.json());
  },
};
