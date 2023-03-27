import { useState } from "react";
import Button from "./Button";

interface Props {
  items: string[];
}

function ListGroup({ items }: Props) {
  const [SelectedItem, setSelectedItem] = useState(-1);
  const [Deleteitem, setDeleteitem] = useState({ on: false, name: "d" });
  return (
    <>
 
      {Deleteitem.on && (
        <div className={"alert alert-light "} role="alert">
          A simple light alert—check it out!{Deleteitem.name}
          <Button
            color="danger"
            onClick={() => setDeleteitem({ on: false, name: "d" })}
          >
            colse
          </Button>
        </div>
      )}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={index === SelectedItem
              ? "list-group-item active"
              : "list-group-item  "}
            key={item}
            onClick={() => setSelectedItem(index)}
          >
            {item}
            <Button
              onClick={() => setDeleteitem({ on: true, name: item })}
              color="danger"
            >
              Delte
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
