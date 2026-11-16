"use client";
import { useState } from "react";
const stops = [
  { name: "VEERWARA", small: "RAJASTHAN / HOMETOWN", info: "Veerwara, Rajasthan — jahaan se meri personal journey shuru hoti hai.", left: "12%", top: "69%" },
  { name: "JAIPUR", small: "A CHAPTER", info: "Jaipur — education aur exploration journey ka ek important chapter.", left: "48%", top: "25%" },
  { name: "NASHIK", small: "CURRENT CHAPTER", info: "Nashik — learning, software projects aur naye experiments ka current chapter.", left: "85%", top: "66%" },
];
export default function JourneyMap() {
  const [selected, setSelected] = useState(2);
  return <div className="journey-component">
    <div className="route-visual" role="group" aria-label="Life journey from Veerwara, Rajasthan via Jaipur to Nashik. Schematic, not navigational.">
      <div className="route-grid" aria-hidden="true" />
      <svg className="route-svg" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true">
        <path className="route-dashed" d="M120 248 C 195 248, 170 132, 282 164 S 385 90, 480 90 C 598 90, 592 256, 702 237 S 784 238, 850 238"/>
        <path className="route-string" d="M120 248 C 195 248, 170 132, 282 164 S 385 90, 480 90 C 598 90, 592 256, 702 237 S 784 238, 850 238"/>
      </svg>
      {stops.map((stop,i) => <button key={stop.name} type="button" className={`route-stop ${i === selected ? "is-selected" : ""}`} style={{left:stop.left,top:stop.top}} onClick={()=>setSelected(i)} aria-pressed={selected===i}>
        <span className="route-dot">{String(i+1).padStart(2,"0")}</span><span className="route-label"><b>{stop.name}</b><small>{stop.small}</small></span>
      </button>)}
      <span className="route-note">ILLUSTRATED JOURNEY / NOT A GPS MAP</span>
    </div>
    <div className="route-description" aria-live="polite"><span className="eyebrow">SELECTED CHAPTER / {String(selected+1).padStart(2,"0")}</span><strong>{selected === 0 ? "VEERWARA, RAJASTHAN" : stops[selected].name}</strong><p>{stops[selected].info}</p></div>
  </div>;
}
