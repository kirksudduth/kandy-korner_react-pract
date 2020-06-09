const remoteURL = "http://localhost:5002";

export default {
  getProducts() {
    return fetch(`${remoteURL}/products`).then((result) => result.json());
  },
  getEmployees() {
    return fetch(`${remoteURL}/employees`).then((result) => result.json());
  },
  getEmployeeByUsername(username) {
    return fetch(`${remoteURL}/employees?username=${username}`).then((result) =>
      result.json()
    );
  },
};
