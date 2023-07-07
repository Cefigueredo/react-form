import React from "react";
import { shallow } from "enzyme";
import Experience from "../Experience/Experience";
import ItemExperience from "../Experience/ItemExperience";
import AddExperience from "./AddExperience";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import experienceSlice from "../../features/Experience/experienceSlice";
const store = configureStore({ reducer: { experience: experienceSlice } });
describe("Experience component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Experience />
      </Provider>
    );
  });

  it("renders ItemExperience component", () => {
    const itemExperienceComponent = wrapper.find(ItemExperience);
    expect(itemExperienceComponent.length).toEqual(1);
  });

  it("renders AddExperience component", () => {
    const addExperienceComponent = wrapper.find(AddExperience);
    expect(addExperienceComponent.length).toEqual(1);
  });
});
