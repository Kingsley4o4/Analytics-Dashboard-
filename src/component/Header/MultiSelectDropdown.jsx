
import "./multiselect.css"


import { useState } from "react";


export default function PeopleSmartSelect() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("main");
  const [label, setLabel] = useState("All");
  const [selected, setSelected] = useState([]);

  const items = ["Managers", "Trainers", "Adrian Lu", "Evelyn Hamilton"];

  const toggleSelect = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="people-dropdown">
      {/* TRIGGER */}
      <div className="trigger2" onClick={() => setOpen(!open)}>
        People: <b  style={{fontSize:"13px"}}>{label}</b>
      </div>

      {/* MAIN */}
      {open && step === "main" && (
        <div className="menu">
          <div
            className="option"
            onClick={() => {
              setLabel("All");
              setSelected([]);
              setOpen(false);
            }}
          >
            All
          </div>

          <div
            className="option"
            onClick={() => {
              setLabel("Select");
              setStep("multi");
            }}
          >
            Select
          </div>
        </div>
      )}

      {/* MULTI */}
      {open && step === "multi" && (
        <div className="menu">
          {/* CHIPS */}
          <div className="chip-wrapper">
            {selected.length === 0 && (
              <span className="placeholder">Select people</span>
            )}

            {selected.map((item) => (
              <span key={item} className="chip">
                {item}
                <button onClick={() => toggleSelect(item)}>×</button>
              </span>
            ))}
          </div>

          {/* OPTIONS */}
          {items.map((item) => (
            <div
              key={item}
              className="option"
              onClick={() => {
                toggleSelect(item);
                setLabel("Multiple Selected");
              }}
            >
              <input
                type="checkbox"
                readOnly
                checked={selected.includes(item)}
              />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
