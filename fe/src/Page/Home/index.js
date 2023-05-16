import { Switch } from "antd";
import CheckBox from "./Checkbox";
import { useState } from "react";
import "./Home.css";
import ImageUpload from "./ImageUpload";

export default function Home() {
  const [choose, setChoose] = useState(false);
  const changeMode = () => {
    setChoose(!choose);
  };
  return (
    <div className="wrapper">
      <div className="switch">
        Change Mode: <Switch onChange={changeMode} />
      </div>
      {!choose ? <CheckBox /> : <ImageUpload />}
    </div>
  );
}