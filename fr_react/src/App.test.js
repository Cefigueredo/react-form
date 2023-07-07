import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

import { act } from "react-dom/test-utils";
import Cookies from "universal-cookie";
const cookies = new Cookies();

beforeAll(() => {
  act(() => {
    cookies.set("email", "form@react.ai");
    cookies.set("password", "react2023");
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test("renders the form", () => {
  const linkElement = screen.getByText(/name/i);
  expect(linkElement).toBeInTheDocument();
});

test("doesn't render the form", () => {
  act(() => {
    cookies.set("email", "form@react.ai");
    cookies.set("password", "react2022");
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const linkElement = screen.getByText(/sign in/i);
  expect(linkElement).toBeInTheDocument();
});
