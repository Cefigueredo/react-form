import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBullet from "./AddBullet";
import ItemBullet from "./ItemBullet";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  addBulletExperience,
  deleteBulletExperience,
} from "../../features/Experience/experienceSlice";
//Component
export default function ListBullets(props) {
  const dispatch = useDispatch();
  const bullets = useSelector(
    (state) => state.experience[props.experienceIndex].bullets
  );

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    // Get the index of initial and destination bullets
    const initialIndex = result.source.index;
    const destIndex = result.destination.index;

    // Remove in initial index and add in destination index (Redux)
    const textBulletInit = bullets[initialIndex].text;
    dispatch(
      deleteBulletExperience({
        experienceIndex: props.experienceIndex,
        bulletIndex: initialIndex,
      })
    );
    dispatch(
      addBulletExperience({
        bullet: { index: destIndex, text: textBulletInit },
        experienceIndex: props.experienceIndex,
      })
    );
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable-bullets">
          {(provided) => (
            <ul
              className="ul-bullets"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {bullets.map((obj, index) => {
                return (
                  <Draggable
                    key={index}
                    draggableId={String(index)}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ItemBullet
                          key={obj.index}
                          index={obj.index}
                          experienceIndex={props.experienceIndex}
                        />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
