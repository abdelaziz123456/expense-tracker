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
  if (enteredData.password.length < 8) {
    setModalMessage("password should be more than or equal 8 letters");
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
  setShowModal,
  setIsSigning,
  setError,
  setIsAuth
) {
  let passed = validation(enteredData, setModalMessage, setShowModal);
  if (passed) {
    setIsSigning(true);
    try {
      const response = await signUp(
        enteredData.email,
        Number(enteredData.password)
      );
      console.log("response is", response);
      if (response.status == 200) {
        setIsAuth(true);
      }
    } catch (err) {
      setError(err?.response?.data?.error?.message);
      console.log("this is error");
    }

    setIsSigning(false);
  }
}
