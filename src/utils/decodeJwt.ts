import { jwtDecode } from 'jwt-decode';

function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode(token) as { exp: number };
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
}

export function isTokenValid(token: string): string {
  const decoded = jwtDecode(token) as { exp: number };
  const currentTime = Date.now() / 1000;
  if (decoded.exp > currentTime) {
    return token;
  }
  throw new Error('Token expired');
}

export default isTokenExpired;
