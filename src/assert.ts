// init.ts should be run before assertions are enabled, since the assert import needs the init information first.
import "./init.js";
import { enableAssert } from "scenerystack/assert";

// Enable assertions. This can be commented out if desired (assertions will be stripped from SceneryStack itself in
// production builds, but the assert() method can still be active).
enableAssert();