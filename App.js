import React from "react";
import { View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import MainNavigator from "./routing/MainNavigator";
import reducer from "./reducers";
import middleware from "./middleware";
import { setLocalNotification } from "./utils/helpers";

const store = createStore(reducer, middleware);
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 2 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
