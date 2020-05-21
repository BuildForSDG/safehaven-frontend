import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const store = configMockStore([thunk]);

export default store;