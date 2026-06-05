"use client";

import { createContext, useContext } from "react";

export const InIntroContext = createContext(false);
export const useInIntro = () => useContext(InIntroContext);
