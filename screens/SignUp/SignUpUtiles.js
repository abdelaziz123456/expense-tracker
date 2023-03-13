import { signUp } from "../../utils/http";

export const validation = (enteredData, setModalMessage, setShowModal) => {
  if (
    !(
      enteredData.email &&
      enteredData.emailConfirmed &&
      enteredData.password &&
      enteredData.passwordConfirmed
    )
  ) {
    setModalMessage("you should fill all fields");
    setShowModal(true);
    return false;
  } else {
    if (!enteredData.email.includes("@")) {
      setModalMessage("email should contains '@'");
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
      if (response.status == 200) {
        setError("");
        setModalMessage("");
        setIsAuth(true);
      }
    } catch (err) {
      if (err?.response?.data?.error?.message == "INVALID_EMAIL") {
        setModalMessage("Invalid Email");
        setShowModal(true);
      } else {
        setModalMessage(err?.response?.data?.error?.message);
        setShowModal(true);
      }

      console.log(err?.response?.data?.error?.message);
    }

    setIsSigning(false);
  }
}
