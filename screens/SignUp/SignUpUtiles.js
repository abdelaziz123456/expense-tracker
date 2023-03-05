import { signUp } from "../../utils/http";

export const validation = (enteredData, setModalMessage, setShowModal) => {
  if (!enteredData.email.includes("@")) {
    setModalMessage("email should contains '@'");
    setShowModal(true);
    return false;
  }
  if (
    !enteredData.email ||
    !enteredData.emailConfirmed ||
    !enteredData.password ||
    !enteredData.passwordConfirmed
  ) {
    setModalMessage("you should fill all fields");
    setShowModal(true);
    return false;
  }

  if (enteredData.email !== enteredData.emailConfirmed) {
    setModalMessage("entered email adresses not identical");
    setShowModal(true);
    return false;
  }

  if (enteredData.password !== enteredData.passwordConfirmed) {
    setModalMessage("entered passwords not identical");
    setShowModal(true);
    return false;
  }

  return true;
};

export async function signUphandler(
  enteredData,
  setModalMessage,
  setShowModal
) {
  console.log("signed up");
  await signUp("dsadsad@gmail.com", 123456789);

  let passed = validation(enteredData, setModalMessage, setShowModal);
  if (passed) {
    console.log("passed successfully");
  } else {
    console.log("something wrong happened");
  }
}
