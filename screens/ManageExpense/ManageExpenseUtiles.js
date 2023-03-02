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
export const updateHandler = (inputData, navigation, updateExpense,expenseId) => {
  updateExpense(expenseId, inputData.description, inputData.amount, inputData.date);

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

export const addHandler = (
  addExpense,
  inputData,
  setInputData,
  navigation,
  setShowModal,
  setErrorMessage,
  setButtonText
) => {
  if (validation(inputData)) {
    addExpense(inputData.description, Number(inputData.amount), inputData.date);
    setInputData({ date: "", description: "", amount: "" });
    navigation.goBack();
  } else {
    setButtonText("Cancel");
    setErrorMessage("you should enter full data");
    setShowModal(true);
  }
};
