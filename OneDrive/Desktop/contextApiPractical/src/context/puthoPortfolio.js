import { createContext, useContext } from "react";

export const PuthoContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = PuthoContext.Provider

// custom hook below

export default function useTheme() {
    return useContext(PuthoContext);
}