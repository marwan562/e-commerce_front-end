import ReactDOM from "react-dom/client";
//router
import AppRouter from "@routes/AppRouter";

//styles
import "@styles/global.css";

//redux
import { Provider } from "react-redux";
import { store } from "@toolkit/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
