import { init, madeWithSceneryStackSplashDataURI } from "scenerystack/init";

// Initialize values that will be used at import-time by other modules.
// This needs to happen first, so we have init.ts => assert.ts => splash.ts => brand.ts => everything else (in main.ts)
init({
  // Internal name of the simulation.
  name: "simulation-name",

  // Version (will be shown in the About dialog)
  version: "1.0.0",

  // The brand name used (should be the same as in brand.ts)
  brand: "made-with-scenerystack",

  // Should be one of the keys from https://github.com/phetsims/babel/blob/main/localeData.json
  // Can be omitted, will default to 'en'
  locale: "en",

  // List of locales that are supported (and can be switched between in the simulation while running)
  availableLocales: ["en"],

  // Image to show while loading the simulation. Can be any image URL.
  splashDataURI: madeWithSceneryStackSplashDataURI,

  allowLocaleSwitching: true,
});