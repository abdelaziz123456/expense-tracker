import { createContext, useState } from "react";

const Dummy_expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-02-05"),
  },
  {
    id: "e3",
    description: "some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "a book",
    amount: 5.99,
    date: new Date("2021-02-19"),
  },
  {
    id: "e5",
    description: "another book",
    amount: 18.99,
    date: new Date("2021-02-18"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e8",
    description: "some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e9",
    description: "a book",
    amount: 5.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e10",
    description: "another book",
    amount: 18.99,
    date: new Date("2022-02-18"),
  },
  {
    id: "e11",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e12",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e13",
    description: "some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e14",
    description: "a book",
    amount: 5.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e15",
    description: "another book",
    amount: 18.99,
    date: new Date("2022-02-18"),
  },
];
export const ExpensesContext = createContext();



    // expenses: [],
    // addExpense: ({ description, amount, date }) => {},
    // deleteExpense: (id) => {},
    // updateExpense: (id, { description, amount, date }) => {},
  

export const ExpensesProvider = (props) => {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {props.children}
    </ExpensesContext.Provider>
  );
};
