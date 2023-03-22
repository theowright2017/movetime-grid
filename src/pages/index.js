import React, { useState } from "react";
import { GridContainer } from "./GridContainer";
import { getSessions } from "../api/GetSessions";

import styles from "@/styles/MainContainer.module.css";

export default function Home() {
  const [sessions, setSessions] = useState(getSessions());
  return (
    <div className={styles.main_container}>
      <h1>Grid</h1>

      <button
        onClick={() =>
          setSessions([
            ...sessions,
            {
              name: "New one",
              col: "time-1000",
              row: "day-Mon-3",
            },
          ])
        }
      >
        Add
      </button>

      <GridContainer sessions={sessions} />
    </div>
  );
}
