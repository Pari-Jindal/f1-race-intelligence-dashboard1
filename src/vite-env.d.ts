/// <reference types="vite/client" />

import type { JSX } from "react";

// Type declaration for the Tableau Embedding API v3 <tableau-viz> web component.
// Allows <tableau-viz> in JSX without type errors.
declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "tableau-viz": JSX.IntrinsicElements["div"] & {
          src: string;
          id?: string;
          toolbar?: "hidden" | "top" | "bottom";
          "hide-tabs"?: boolean;
        };
      }
    }
  }
}
