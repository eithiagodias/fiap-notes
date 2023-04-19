import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --colors-bg-primary: rgb(32, 32, 36);
    --colors-id-light: #996DFF;
    --colors-id-mid: #8257E5;
    --colors-id-dark: #633BBC;
    --colors-id-low: #271A45;
    - -colors-discover-light: #6A80FF;
    --colors-discover-mid: #4863F7;
    --colors-discover-dark: #3249CB;
    --colors-discover-low: #182049;
    --colors-ignite-light: #00B37E;
    --colors-ignite-mid: #00875F;
    --colors-ignite-dark: #015F43;
    --colors-ignite-low: #00291D;
    --colors-ec-light: #FC4737;
    --colors-ec-mid: #D73628;
    --colors-ec-dark: #AD1E12;
    --colors-ec-low: #42110D;
    --colors-success-light: #04D361;
    --colors-success-base: #1B873F;
    --colors-success-low: #051B0D;
    --colors-danger-light: #F75A68;
    --colors-danger-base: #CC2937;
    --colors-danger-low: #2D090C;
    --colors-warning-light: #FBA94C;
    --colors-warning-base: #EB8A1D;
    --colors-warning-low: #2E1B06;
    --colors-new-light: #1EF7D0;
    --colors-new-base: #07847E;
    --colors-new-low: #163840;
    --colors-white: #FFFFFF;
    --colors-black: #000000;
    --colors-grey-100: #E1E1E6;
    --colors-grey-200: #C4C4CC;
    --colors-grey-300: #8D8D99;
    --colors-grey-400: #7C7C8A;
    --colors-grey-500: #505059;
    --colors-grey-600: #323238;
    --colors-grey-700: #29292E;
    --colors-grey-800: #202024;
    --colors-grey-900: #121214;
    --colors-grey-950: #09090A;
    --colors-text-title: #E1E1E6;
    --colors-text-base: #C4C4CC;
    --colors-text-support: #8D8D99;
    --colors-placeholder: #7C7C8A;
    --colors-inputs-icons: #505059;
    --colors-shape-tertiary: #323238;
    --colors-shape-secondary: #29292E;
    --colors-shape-primary: #202024;
    --colors-color-background: #121214;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-7: 1.75rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-40: 10rem;
    --space-64: 16rem;
    --space-80: 20rem;
    --space-px: 1px;
    --fontSizes-xxs: 0.625rem;
    --fontSizes-xs: 0.75rem;
    --fontSizes-sm: 0.875rem;
    --fontSizes-md: 1rem;
    --fontSizes-lg: 1.125rem;
    --fontSizes-xl: 1.25rem;
    --fontSizes-2xl: 1.5rem;
    --fontSizes-4xl: 2rem;
    --fontSizes-5xl: 2.25rem;
    --fontSizes-6xl: 3rem;
    --fontSizes-7xl: 4rem;
    --fontSizes-8xl: 4.5rem;
    --fontSizes-9xl: 6rem;
    --fonts-default: Roboto, sans-serif;
    --fonts-highlight: Roboto, sans-serif;
    --fonts-reading: Spectral, serif;
    --fonts-code: Fira code, monospace;
    --fontWeights-regular: 400;
    --fontWeights-medium: 500;
    --fontWeights-bold: 700;
    --lineHeights-shorter: 125%;
    --lineHeights-short: 140%;
    --lineHeights-base: 160%;
    --lineHeights-tall: 180%;
    --borderWidths-thin: 1px;
    --borderWidths-medium: 1.5px;
    --borderWidths-thick: 2px;
    --borderWidths-heavy: 4px;
    --radii-xs: 2.5px;
    --radii-sm: 5px;
    --radii-md: 10px;
    --radii-lg: 20px;
    --radii-xlg: 30px;
    --radii-full: 99999px;
    --opacity-default: 100%;
    --opacity-semiOpaque: 90%;
    --opacity-intense: 75%;
    --opacity-medium: 50%;
    --opacity-light: 25%;
    --opacity-semiTransparent: 10%;
    --zIndices-overlay: 9995;
    --zIndices-modal: 9999;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--fonts-default);
    background-color: var(--colors-bg-primary);
    color: var(--white);
    overflow-x: hidden;
  }

  input[type="password"],
  input[type="text"] {
    box-sizing: border-box;
    appearance: none;
    outline: 0;
    width: 100%;
    height: var(--space-12);
    padding: 0 var(--space-4);
    font-family: var(--fonts-default);
    font-size: var(--fontSizes-md);
    color: var(--colors-text-title);
    background-color: var(--colors-grey-900);
    border: 2px solid transparent;
    border-radius: var(--radii-sm);
    transition: border-color 0.2s ease 0s;
  }

  textarea {
    appearance: none;
    outline: 0;
    margin: 0;
    padding: var(--space-2);
    height: 80px;
    background-color: var(--colors-grey-900);
    font-family: var(--fonts-default);
    font-size: var(--fontSizes-md);
    border: 2px solid transparent;
    color: var(--colors-text-title);
    border-radius: var(--radii-sm);

    ::placeholder {
      color: var(--colors-text-placeholder);
      font-weight: normal;
    }
  }

  input:focus-within {
    border-color: var(--colors-id-mid);
  }

  input[type="checkbox"]{
    width: var(--space-5);
    height: var(--space-5);
    background-color: var(--colors-grey-900);
    padding: 0;
    cursor: pointer;
  }

  label {
    font-size: var(--fontSizes-md);
    color: var(--colors-text-title);
  }

  .error {
    color: var(--colors-danger-light);
    font-size: var(--fontSizes-xs);
    min-height: var(--space-4);
  }

`;
