// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://unpkg.com/@observablehq/notebook-runtime?module";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/@nitaku/dashboard-example.js";

const renders = {
  "preview": "#preview",
  "infobox": "#infobox",
  "layout": "#color"
};
Runtime.load(notebook, (variable) => {
  const selector = renders[variable.name];
  if (selector) {
    return new Inspector(document.querySelector(selector));
  } else {
    return true;
  }
});
