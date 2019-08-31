// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://unpkg.com/@observablehq/notebook-runtime?module";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/@nitaku/cnr.js";

const renders = {
  "map": "#preview"
};
Runtime.load(notebook, (variable) => {
  const selector = renders[variable.name];
  if (selector) {
    return new Inspector(document.querySelector(selector));
  } else {
    return true;
  }
});
