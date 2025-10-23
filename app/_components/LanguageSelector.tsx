"use client";

import { useEffect, useRef, useState } from "react";
import { svgSelector } from "../_utils/svgSelector";
import { LanguageCode } from "@/types/types";
import { LanguageInterface } from "@/types/interfaces";

// LANGUAGES MOCKUP DATA
const languages: Array<LanguageInterface> = [
  { code: "IT", label: "Italiano" },
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
];

// TODO: install i18n next to handle the languages

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("IT");
  const languageContainer = useRef<HTMLDivElement>(null);

  function handleLanguageSelect(language: LanguageCode) {
    setSelectedLanguage(language);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (languageContainer.current && !languageContainer.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={languageContainer}>
      <button
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <span className="text-h5 font-medium">{selectedLanguage}</span>
        <span className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          {svgSelector({
            svgName: "arrow_down",
            svgWidth: "16px",
            svgHeight: "16px",
            svgFill: "#FFF",
          })}
        </span>
      </button>

      {isOpen && (
        <ul className="absolute top-[120%] left-0 w-32 bg-black rounded-md shadow-lg">
          {languages.map(({ code, label }) => (
            <li key={code}>
              <button
                className={`w-full px-4 py-2 text-h5 text-left hover:bg-gray-800 transition-colors ${
                  selectedLanguage === code ? "bg-gray-900" : ""
                }`}
                onClick={() => handleLanguageSelect(code)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
