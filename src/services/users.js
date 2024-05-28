// users.js
const users = [
  {
    email: "wissalzattal@esprit.tn",
    password: "1234",
  },
];

// Function to sign up a new user
export const signUpUser = (name, email, password) => {
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return { success: false, message: "User already exists with this email." };
  }
  users.push({ name, email, password });
  return { success: true, message: "Account created successfully!" };
};

// Function to sign in an existing user
export const signInUser = (email, password) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return { success: true, message: "Signed in successfully!" };
  } else {
    return { success: false, message: "Invalid email or password." };
  }
};

// Function to get all users (for debugging purposes)
export const getAllUsers = () => {
  return users;
};
