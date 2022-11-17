import React, { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/folder.css";

interface Props {
  item: {
    name: string;
    child?: [{ name?: string; child?: [{ name: string }] }];
    role: string;
  };
}

export const Folder: FC<Props> = ({ item }) => {
  const childs = item.child;
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleToggle = () => {
    setIsClicked(!isClicked);
    // console.log(item.name);
    // console.log(childs);
  };
  return (
    <>
      <div className="folder">
        <div className="name">
          <div className="arrowIcon" onClick={handleToggle}>
            <FontAwesomeIcon
              icon={faLocationArrow}
              className={isClicked ? "rotate" : "arrow"}
            />
          </div>
          <div className="title">
            <h4>{item.name}</h4>
          </div>
        </div>
        <div className="action">
          <div className="addIcon">
            <FontAwesomeIcon icon={faPlus} className="add-rotate" />
          </div>
          <div className="label">New</div>
        </div>
      </div>

      {item.child ? (
        childs?.map((element, index) => (
          <div key={index} className={isClicked ? "display box" : "hidden"}>
            {element.name}
          </div>
        ))
      ) : (
        <div className={isClicked ? "display box gray" : "hidden"}>
          No Folders
        </div>
      )}
      {/* {childs?.child ? (
        <div className={isClicked ? "display box" : "hidden"}>child</div>
      ) : (
        <div className={isClicked ? "display box gray" : "hidden"}>
          No Folders
        </div>
      )} */}
    </>
  );
};
