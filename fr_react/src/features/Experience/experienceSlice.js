import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = [
  {
    company: "",
    title: "",
    start_month: undefined,
    start_year: dayjs().year(),
    end_month: undefined,
    end_year: dayjs().year(),
    bullets: [{ index: 0, text: "" }],
  },
];

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    updateExperience: (state, action) => {
      const {
        company,
        title,
        start_month,
        start_year,
        end_month,
        end_year,
        bullets,
      } = action.payload;

      const found_experience = state.find(
        (state, i) => i === action.payload.index
      );
      if (found_experience) {
        found_experience.company = company;
        found_experience.title = title;
        found_experience.start_month = start_month;
        found_experience.start_year = start_year;
        found_experience.end_month = end_month;
        found_experience.end_year = end_year;
        if (bullets) {
          // Clean the bullets
          found_experience.bullets = [];
          bullets.map((bullet, id) => {
            // Insert the bullets
            if (bullet.text !== undefined) {
              found_experience.bullets.push({
                index: bullet.index,
                text: bullet.text,
              });
            } else if (bullet.index === undefined) {
              // If there is no index, then use the index of mapping
              found_experience.bullets.push({ index: id, text: bullet });
            }
          });
        } else {
          found_experience.bullets = [{ index: 0, text: "" }];
        }
      }
    },
    addExperience: (state, action) => {
      state.push(initialState[0]);
    },
    deleteExperience: (state, action) => {
      const found_experience = state.find(
        (state, i) => i === action.payload.index
      );
      if (found_experience) {
        state.splice(state.indexOf(found_experience), 1);
      }
    },
    updateBulletExperience: (state, action) => {
      const found_experience = state.find(
        (state, i) => i === action.payload.experienceIndex
      );
      if (found_experience) {
        found_experience.bullets = found_experience.bullets.map((state, i) => {
          if (i === action.payload.bulletIndex) {
            return {
              index: action.payload.bulletIndex,
              text: action.payload.bullet,
            };
          } else {
            return state;
          }
        });
      }
    },
    addBulletExperience: (state, action) => {
      // It gets payload {bullet: obj, experienceIndex: int}
      const { bullet } = action.payload;
      const found_experience = state.find(
        (state, i) => i === action.payload.experienceIndex
      );
      if (bullet) {
        found_experience.bullets.splice(bullet.index, 0, {
          index: bullet.index,
          text: bullet.text,
        });
        const newBullets = found_experience.bullets.map((obj, id) => {
          return { index: id, text: obj.text };
        });

        found_experience.bullets = newBullets;
      } else {
        found_experience.bullets.push({
          index: found_experience.bullets.length,
          text: "",
        });
      }
    },
    deleteBulletExperience: (state, action) => {
      const found_experience = state.find(
        (state, i) => i === action.payload.experienceIndex
      );
      if (found_experience) {
        found_experience.bullets.splice(action.payload.bulletIndex, 1);
        const newBullets = found_experience.bullets.map((obj, id) => {
          return { index: id, text: obj.text };
        });

        found_experience.bullets = newBullets;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateExperience,
  addExperience,
  deleteExperience,
  updateBulletExperience,
  addBulletExperience,
  deleteBulletExperience,
} = experienceSlice.actions;

//Component
export default experienceSlice.reducer;
