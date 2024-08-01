import { jwtDecode } from 'jwt-decode';

/**
 * Check if token is expired and return boolean value accordingly
 * @param token jwt token
 * @returns boolean
 */
export function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode(token) as { exp: number };
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
}

/**
 * Check if token is valid and return it if it is
 * @param token jwt token
 * @returns string
 */
export function isTokenValid(token: string): string {
  const decoded = jwtDecode(token) as { exp: number };
  const currentTime = Date.now() / 1000;
  if (decoded.exp > currentTime) {
    return token;
  }
  throw new Error('Token expired');
}
