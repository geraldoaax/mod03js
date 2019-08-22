import Reactotron from "reactotron-react-js";
import sagaPlugin from "reactotron-redux-saga";

Reactotron.configure() // we can use plugins here -- more on this later
  .connect() // let's connect!
  .use(sagaPlugin()); // <-- sweet
