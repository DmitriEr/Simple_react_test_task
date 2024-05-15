import type { User } from './types';

const getUserData = async (id: number): Promise<User> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.json();
  } catch {
    return {};
  }
};

export { getUserData };
