const BASE_URL = "http://localhost:5000/api";

// ─── Products ───────────────────────────────────────
export const fetchProducts = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const res = await fetch(`${BASE_URL}/products${query ? `?${query}` : ""}`);
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

// ─── Auth ────────────────────────────────────────────
export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const registerUser = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
};

export const fetchUserProfile = async (token) => {
  const res = await fetch(`${BASE_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

// ─── Orders ──────────────────────────────────────────
export const createOrder = async (orderData, token) => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  });
  return res.json();
};

export const fetchMyOrders = async (token) => {
  const res = await fetch(`${BASE_URL}/orders/myorders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};