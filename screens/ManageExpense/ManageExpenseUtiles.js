import { storeExpense, updateFetchedExpense } from "../../utils/http";

export const deleteHandler = (
  expesneId,
  deleteExpense,
  navigation,
  setErrorMessage,
  setShowModal,
  setButtonText
) => {
  //deleteExpense(expesneId);
  setButtonText("Confirm");
  setErrorMessage("Are you sure you want to delete ? ");
  setShowModal(true);
  // navigation.goBack();
};
export const cancelHandler = (navigation) => {
  navigation.goBack();
};
export const updateHandler = (
  inputData,
  navigation,
  updateExpense,
  expenseId,
  setLoading
) => {
  setLoading(true);
  updateExpense(
    expenseId,
    inputData.description,
    inputData.amount,
    inputData.date
  );
  updateFetchedExpense(expenseId, {
    description: inputData.description,
    amount: inputData.amount,
    date: inputData.date,
  });
  setLoading(false);
  navigation.goBack();
};

const validation = (inputData) => {
  for (let data in inputData) {
    if (!inputData[data]) {
      return false;
    }
    break;
  }

  return true;
};

export async function addHandler(
  addExpense,
  inputData,
  setInputData,
  navigation,
  setShowModal,
  setErrorMessage,
  setButtonText,
  setLoading
) {
  if (validation(inputData)) {
    setLoading(true);
    const id = await storeExpense(inputData);
    addExpense(
      inputData.description,
      Number(inputData.amount),
      inputData.date,
      id
    );
    setInputData({ date: "", description: "", amount: "" });
    setLoading(false);
    navigation.goBack();
  } else {
    setButtonText("Cancel");
    setErrorMessage("you should enter full data");
    setShowModal(true);
  }
}
