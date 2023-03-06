import { createContext, useState } from "react";

const Dummy_expenses = [];
export const ExpensesContext = createContext();

export const ExpensesProvider = (props) => {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  const [isAuth, setIsAuth] = useState(false);

  // add expense to the list

  const addExpense = (description, amount, date, id) => {
    setExpenses([
      ...expenses,
      {
        description,
        amount,
        date,
        id,
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
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  );
};
