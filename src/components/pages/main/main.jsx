import { Link } from "react-router-dom";
import { Button } from "../../UI/button";
import Header from "../../layouts/header/header";
import WearNow from "../../layouts/wearNow/wearNow";

export default function Main() {
  return (
    <>
      <Header />
      
      <WearNow />
    </>
  );
}

