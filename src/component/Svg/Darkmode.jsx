import { useContext, useState } from "react";
import { DarkMode } from "../Context/Context";

const Darkmode = () => {
  const [switcher, setSwitcher] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkMode);

  if (darkMode === false) {
    document.documentElement.style.setProperty("--cardbgfirst", "#ffe1c6");
    document.documentElement.style.setProperty("--cardbgsecond", "#ffcb05");
    document.documentElement.style.setProperty("--fullbg", "#ccdadd");
    document.documentElement.style.setProperty("--input", "#EBEBEB");
    document.documentElement.style.setProperty("--placeholder", "#919191");
  } else {
    document.documentElement.style.setProperty("--cardbgfirst", "#BFDFFF");
    document.documentElement.style.setProperty("--cardbgsecond", "#001224");
    document.documentElement.style.setProperty("--fullbg", "#454545");
    document.documentElement.style.setProperty("--input", "#919191");
    document.documentElement.style.setProperty("--placeholder", "white");
  }

  return (
    <>
      <svg
        onClick={() => setDarkMode((darkMode) => !darkMode)}
        className="dark-mode-btn"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_147_264)">
          <path
            d="M0.390625 12.5C0.390625 19.1878 5.81216 24.6094 12.5 24.6094C19.1878 24.6094 24.6094 19.1878 24.6094 12.5C24.6094 5.81221 19.1878 0.390625 12.5 0.390625C5.81221 0.390625 0.390625 5.81216 0.390625 12.5ZM12.5 21.4844V3.51562C17.4661 3.51562 21.4844 7.53472 21.4844 12.5C21.4844 17.4661 17.4653 21.4844 12.5 21.4844Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_147_264">
            <rect width="25" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Darkmode;
