import { useTheme } from "../../../hooks/useTheme.ts";

const MoonIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clipPath="url(#a)"><path stroke="#091540" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98" d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z" /></clipPath></defs></svg>
  )
}
const SunIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clipPath="url(#a)"><path stroke="#fbfdfe" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98" d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z" /></clipPath></defs></svg>
  )
}

const ToggleThemeButton = () => {
  const { theme } = useTheme();
  return theme === "dark" ? <SunIcon /> : <MoonIcon />
}

export default ToggleThemeButton;