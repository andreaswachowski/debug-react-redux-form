import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import renderer from 'react-test-renderer';
import { modelReducer, formReducer, Control } from 'react-redux-form';

const initialState = { foo: 'bar' };
const store = createStore(
  combineReducers({
    test: modelReducer('test', initialState),
    testForm: formReducer('test', initialState)
  })
);

it('renders with react-test-renderer', () => {
  renderer.create(
    <Provider store={store}>
      <Control.text model="user.name" />
    </Provider>
  );
});
