export const createThemeSlice = (set) => ({
  themeColor: "white",
  setThemeColor: (newColor) => set(() => ({ themeColor: newColor })),
});
