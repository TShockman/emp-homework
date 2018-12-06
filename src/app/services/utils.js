export function parseResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return null;
}
