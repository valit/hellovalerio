"use client";

import { createContext, useContext } from "react";

export const InPullQuoteContext = createContext(false);
export const useInPullQuote = () => useContext(InPullQuoteContext);
