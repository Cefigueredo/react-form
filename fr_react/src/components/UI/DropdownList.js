import React, { useEffect, useRef, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
//Component
export default function DropdownList(props) {
  const { items } = props;
  const [selected, setSelected] = useState(props.defaultText);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if initial render
    }
    if (props.defaultText) {
      setSelected(props.defaultText);
    }
  }, [props.defaultText]);

  const handleClick = (e) => {
    setSelected(e.target.innerHTML);

    if (props.handleClickItem) {
      props.handleClickItem(e.target.innerHTML, props.index);
    }
  };

  return (
    <>
      <DropdownButton
        variant="outline-secondary"
        title={selected}
        id="dropdown-menu-align-end"
        size="sm"
        align="end"
      >
        {items.map((e, index) => (
          <Dropdown.Item
            key={index}
            href="#"
            onClick={handleClick}
            className={props.styleItems}
          >
            {e}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
}
