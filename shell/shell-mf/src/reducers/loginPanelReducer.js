export const loginPanelReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_EMAIL": {
      return {
        ...state,
        email: action.enteredEmail,
      };
    }
    case "CHANGE_PASSWORD": {
      return {
        ...state,
        password: action.enteredPassword,
      };
    }
    case "SET_EMAIL_VALIDATION": {
      return {
        ...state,
        isEmailInputValid: action.setIsEmailInputValid,
      };
    }
    case "SET_PWD_VALIDATION": {
      return {
        ...state,
        isPasswordInputValid: action.newPasswordValidation,
      };
    }
    case "SET_IF_INPUT_WAS_TOUCHED": {
      return {
        ...state,
        isEmailInputTouched: action.setIsInputTouched,
      };
    }
    case "IS_LOADING": {
      return {
        ...state,
        isLoading: action.setIsLoading,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
};
