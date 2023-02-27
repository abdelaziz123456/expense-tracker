import { createContext, useState } from "react";

const Dummy_expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2023-02-25"),
  },
  {
    id: "e3",
    description: "some bananas",
    amount: 5.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e4",
    description: "a book",
    amount: 5.99,
    date: new Date("2022-02-22"),
  },
  {
    id: "e5",
    description: "another book",
    amount: 18.99,
    date: new Date("2022-02-26"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2023-01-05"),
  },
  {
    id: "e8",
    description: "some bananas",
    amount: 5.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e9",
    description: "a book",
    amount: 5.99,
    date: new Date("2023-02-24"),
  },
  {
    id: "e10",
    description: "another book",
    amount: 18.99,
    date: new Date("2023-02-26"),
  },
  {
    id: "e11",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e12",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2023-01-05"),
  },
  {
    id: "e13",
    description: "some bananas",
    amount: 5.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e14",
    description: "a book",
    amount: 5.99,
    date: new Date("2023-02-19"),
  },
  {
    id: "e15",
    description: "another book",
    amount: 18.99,
    date: new Date("2023-02-18"),
  },
];
export const ExpensesContext = createContext();

export const ExpensesProvider = (props) => {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  // add expense to the list

  const addExpense = (description, amount, date) => {
    setExpenses([
      ...expenses,
      {
        id: `e${Number(expenses[expenses.length - 1].id.slice(1)) + 1}`,
        description,
        amount,
        date,
      },
    ]);
  };

  // remove  expense from the list

  const deleteExpense = (id) => {
    let updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // update Expense in the list

  const updateExpense = (id, description, amount, date) => {
    let updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses([...updatedExpenses, { id, description, amount, date }]);
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        setExpenses,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  );
};
