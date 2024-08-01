import { jwtDecode } from 'jwt-decode';

function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode(token) as { exp: number };
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
}

export default isTokenExpired;
