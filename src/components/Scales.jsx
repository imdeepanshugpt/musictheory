import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";

import { useState } from "react";

function Scales() {
  const [scale, setScale] = useState('');
  const [scales, setScales] = useState([]);
  const [chords, setChords] = useState([]);
  let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let majorScale = ["T", "T", "S", "T", "T", "T", "S"];
  let minorScale = ["T", "S", "T", "T", "S", "T", "T"];
  let chordFamily = ["M", "m", "m", "M", "M", "m", "M"];
  const generateScales = (note, scale) => {
    let index = notes.indexOf(note);
    if (index === -1) {
      return [];
    }
    const iterator = scale === "major" ? majorScale : minorScale;
    let scale_notes = [];
    scale_notes.push(notes[index]);
    iterator.forEach((t) => {
      if (t === "T") {
        index = index + 2;
        index = index >= notes.length ? index - notes.length : index;
        scale_notes.push(notes[index]);
      } else {
        index = index + 1;
        index = index >= notes.length ? index - notes.length : index;
        scale_notes.push(notes[index]);
      }
    });
    let chords = [];
    chordFamily.forEach((chord, index) => {
      if(chord === 'M'){
        chords.push(scale_notes[index]);
      } else if(chord === 'm') {
        chords.push(scale_notes[index] +"m");
      }
    })
    setScales(scale_notes);
    setChords(chords);
    setScale(note + " " + scale);
  };
  return (
    <>
      <ListGroup horizontal>
        {notes.map((note, index) => (
          <ListGroup.Item key={index}>{note}</ListGroup.Item>
        ))}
      </ListGroup>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Scales
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {notes.map((note, index) => (
            <>
              <Dropdown.Item
                key={`${index}major`}
                onClick={() => generateScales(note, "major")}
              >
                {note} Major
              </Dropdown.Item>
              <Dropdown.Item
                key={`${index}minor`}
                onClick={() => generateScales(note, "minor")}
              >
                {note} Minor
              </Dropdown.Item>
            </>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <h3>Notes in {scale} Scale</h3>
      <ListGroup horizontal>
        {scales.map((scale, index) => (
          <ListGroup.Item key={index}>{scale}</ListGroup.Item>
        ))}
      </ListGroup>
      <h3>Chords Family</h3>
      <ListGroup horizontal>
        {chords.map((chord, index) => (
          <ListGroup.Item key={index}>{chord}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Scales;
