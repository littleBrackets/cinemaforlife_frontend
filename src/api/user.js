import {userService} from "./axios";

export async function register(data) {
  const res = await userService.post("/users/register", data);
  return res.data;
}

export async function login(data) {
  const res = await userService.post(`/users/login`, data);
  return res.data;
}
