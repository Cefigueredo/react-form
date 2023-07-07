import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Cookies from "universal-cookie";
import App from "../../App";
import { store } from "../../store";

beforeAll(() => {
  act(() => {
    const cookies = new Cookies();
    cookies.set("email", "form@react.ai");
    cookies.set("password", "react2023");
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test("There is btn", () => {
  const saveBtn = screen.getByTestId("test-save-btn");
  expect(saveBtn).toBeTruthy();
  const cl = fireEvent.click(saveBtn);
  expect(cl).toBeInTheDocument();
});
