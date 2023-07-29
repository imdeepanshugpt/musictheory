import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";

import { useState } from "react";

function Scales() {
  const [scale, setScale] = useState(null);
  const [relative, setRelative] = useState("");
  const [notesOfScale, setNotesOfScale] = useState([]);
  const [chords, setChords] = useState([]);

  
  let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let majorScale = ["T", "T", "S", "T", "T", "T", "S"];
  let minorScale = ["T", "S", "T", "T", "S", "T", "T"];
  let chordFamily = ["M", "m", "m", "M", "M", "m", "M"];


  const generateChordFamily = (scale_notes) => {
      let chords = [];
      chordFamily.forEach((chord, index) => {
        if (chord === "M") {
          if (index === 6) {
            chords.push(scale_notes[index] + " dim");
          } else {
            chords.push(scale_notes[index]);
          }
        } else if (chord === "m") {
          chords.push(scale_notes[index] + "m");
        }
      });
      setChords(chords);
  };
  const generateRelativeScale = (scale_notes, scale) => {
    if (scale === "major") {
      setRelative(scale_notes[5] + " minor");
    } else {
      setRelative(scale_notes[2] + " major");
    }
  };

  const getNotesInScale = (note, scale) => {
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
    return scale_notes;
  };
  const generateScales = (note, scale) => {
    console.log("generate scale")
    const scale_notes = getNotesInScale(note, scale);
    /**
     * This will generate chord family
    */
   setNotesOfScale(scale_notes);
   setScale({note, scale});
   if(scale === 'major'){
     generateChordFamily(scale_notes);
   }

   if(scale === 'minor'){
    const major_scale = scale_notes[2];
    const major_scale_notes = getNotesInScale(major_scale, "major");
    generateChordFamily(major_scale_notes);
   }

   generateRelativeScale(scale_notes, scale);
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
      { scale ? <h3>Notes in {scale?.note} {scale?.scale} Scale</h3> : ''}
      <ListGroup horizontal>
        {notesOfScale.map((scale, index) => (
          <ListGroup.Item key={index}>{scale}</ListGroup.Item>
        ))}
      </ListGroup>
      { relative ? <h3>Relative scale is {relative}</h3> : ''}
     { chords.length ? <h3>Chords Family</h3> : ''}
      <ListGroup horizontal>
        {chords.map((chord, index) => (
          <ListGroup.Item key={index}>{chord}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Scales;
