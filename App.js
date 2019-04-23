import React from "react";
import { View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import MainNavigator from "./routing/MainNavigator";
import reducer from "./reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
