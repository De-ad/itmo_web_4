// checks localStorage for user
export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return token;
  } else {
    return {};
  }
}
