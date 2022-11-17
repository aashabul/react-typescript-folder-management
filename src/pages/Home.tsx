import React, { useEffect, useState } from "react";
import { Folder } from "../components/Folder";
import "../styles/home.css";

export const Home = () => {
  const [folder, setFolder] = useState<any[]>([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFolder(data));
  }, []);

  return (
    <div className="container">
      <h1>Folder Structure</h1>
      <div className="folder-container">
        {folder.map((item, index) => (
          <Folder key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
