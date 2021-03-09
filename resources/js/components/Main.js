import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainRoutes from "../route/MainRoutes";
import { configurePersistor, configureStore } from "./redux/store";

const store = configureStore();
const persistor = configurePersistor(store);

export default function Main() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <MainRoutes />
            </PersistGate>
        </Provider>
    );
}

if (document.getElementById("Main")) {
    ReactDOM.render(<Main />, document.getElementById("Main"));
}
