import { useEffect, useState } from "react";
import Container from "./Test/Container";
import Grid from "./Test/Grid";
import Utility from "./Test/Utility";

const Test = () => {
  const [util, setUtil] = useState(true);
  const [contain, setContain] = useState(true);
  const [grid, setGrid] = useState(true);

  useEffect(() => {
    setUtil(false);
    setContain(false);
    setGrid(false);
  }, []);

  return (
    <>
      <div className="container">{util && <Utility />}</div>
      <div className="fluid-container">{contain && <Container />}</div>
      <>{grid && <Grid />}</>
    </>
  );
};

export default Test;
