import { API_URL } from '../config';

const jsonHeaders = (token) => ({
  'Content-Type': 'application/json',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

export async function signup(data) {
  const response = await fetch(`${API_URL}/api/auth/signup`, {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function login(data) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function fetchBrands(token) {
  const response = await fetch(`${API_URL}/api/brands`, {
    headers: jsonHeaders(token),
  });
  return response.json();
}

export async function createBrand(data, token) {
  const response = await fetch(`${API_URL}/api/brands`, {
    method: 'POST',
    headers: jsonHeaders(token),
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function fetchInfluencers(token) {
  const response = await fetch(`${API_URL}/api/influencers`, {
    headers: jsonHeaders(token),
  });
  return response.json();
}

export async function createInfluencer(data, token) {
  const response = await fetch(`${API_URL}/api/influencers`, {
    method: 'POST',
    headers: jsonHeaders(token),
    body: JSON.stringify(data),
  });
  return response.json();
}
