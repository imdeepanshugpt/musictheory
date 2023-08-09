import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CProgression = (props) => {
  const [chords, setProgression] = useState([]);

  useEffect(() => {
    const progression = [];
    progression.push(props.chords[0]);
    progression.push(props.chords[5] + "m");
    progression.push(props.chords[3]);
    progression.push(props.chords[4]);
    setProgression(progression);
  }, [props.chords]);

  return (
    <>
      <h3 className="heading-3">Chords Progression</h3>
      <ListGroup horizontal>
        {chords.map((chord, index) => (
          <ListGroup.Item key={index}>{chord}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default CProgression;
