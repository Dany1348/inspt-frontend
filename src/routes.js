// src/routes.js
const BASE_URL = "http://localhost:3000";

export const API_ROUTES = {
    GET_ALL_USERS: `${BASE_URL}/users/all`,
    CREATE_USER: `${BASE_URL}/users/create`,
    FIND_USER: (dni) => `${BASE_URL}/users/find/${dni}`,
    UPDATE_USER: (dni) => `${BASE_URL}/users/update/${dni}`,
    DELETE_USER: (dni) => `${BASE_URL}/users/delete/${dni}`,
    GET_ALL_PRODUCTS: `${BASE_URL}/products/all`,
    CREATE_PRODUCT: `${BASE_URL}/products/create`,
    FIND_PRODUCT: (id) => `${BASE_URL}/products/find/${id}`,
    UPDATE_PRODUCT: (id) => `${BASE_URL}/products/update/${id}`,
    DELETE_PRODUCT: (id) => `${BASE_URL}/products/delete/${id}`,
};
