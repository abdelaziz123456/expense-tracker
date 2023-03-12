import axios from "axios";
const backendUrl = `https://expanse-tracker-76ecb-default-rtdb.firebaseio.com`;
const key = "AIzaSyCsHvHa73tSxQGwivXZAYcuxV14mS27scs";
const authUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
export async function storeExpense(expenseData) {
  const response = await axios.post(`${backendUrl}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function getExpenses() {
  const response = await axios.get(`${backendUrl}/expenses.json`);
  const expenses = [];

  for (let key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateFetchedExpense(id, expesneData) {
  axios.put(`${backendUrl}/expenses/${id}.json`, expesneData);
}

export function removeFetchedExpense(id) {
  axios.delete(`${backendUrl}/expenses/${id}.json`);
}

export const signUp = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response;
};

export const logIn = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsHvHa73tSxQGwivXZAYcuxV14mS27scs`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response;
};
