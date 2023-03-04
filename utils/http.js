import axios from "axios";
const backendUrl = `https://expanse-tracker-76ecb-default-rtdb.firebaseio.com`;

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

export  function removeFetchedExpense(id) {
  axios.delete(`${backendUrl}/expenses/${id}.json`);
}
