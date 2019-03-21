import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);

//import React from 'react'
//import { render } from 'react-dom'
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import reducer from './reducers'
// import App from './containers/App'
// import 'todomvc' from './containers/App'
// import 'todomvc-app-css/index.css'
// // 配置入口文件
// // 这里我们从 react-redux 中获取了一个 Provider 组件，我们把它渲染到应用的最外层
// // 他需要一个属性store ,他把这个store 放在context 里，给App(Connect)用。
// const store = createStore(reducer)
// let elem = document.getElementById('root')
//
// render(
//   <Provider store = {store}>
//     <App/>
//   </Provider>,
//   elem
// )
