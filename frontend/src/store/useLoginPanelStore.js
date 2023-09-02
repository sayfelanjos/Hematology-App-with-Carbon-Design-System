import { create } from "zustand";

export const useLoginPanelStore = create((set) => ({
  isEmailInputInvalid: true,
  setIsEmailInputInvalid: (payload) => set(() => ({ isEmailInputInvalid: payload })),
  isLoading: false,
  setIsLoading: (payload) => set(() => ({ isLoading: payload })),
  emailValue: "",
  setEmailValue: (payload) => set(() => ({ emailValue: payload })),
  passwordValue: "",
  setPasswordValue: (payload) => set(() => ({ passwordValue: payload })),
  wasPasswordFieldTouched: false,
  setWasPasswordFieldTouched: (payload) => set(() => ({ wasPasswordFieldTouched: payload })),
  isPasswordFieldValid: false,
  setIsPasswordFieldValid: (payload) => set(() => ({ isPasswordFieldValid: payload })),
}));
