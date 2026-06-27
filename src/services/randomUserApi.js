const API_URL =
  "https://api.freeapi.app/api/v1/public/randomusers";

export async function fetchUsers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }

  const data = await response.json();

  return data.data.data;
}