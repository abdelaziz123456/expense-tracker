import { createContext, useState } from "react";

const Dummy_expenses = [





];
export const ExpensesContext = createContext();

export const ExpensesProvider = (props) => {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  // add expense to the list

  const addExpense = (description, amount, date) => {
    setExpenses([
      ...expenses,
      {
        id:expenses.length==0 ? 'e1' : `e${Number(expenses[expenses.length - 1].id.slice(1)) + 1}`,
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
