import React from "react";
import { TimeSlots } from "../html/TimeSlots";
import { DaySlots } from "../html/DaySlots";
import { getRows } from "../layout/GetLayout";
import styles from "@/styles/GridContainer.module.css";

export const GridContainer = ({ sessions }) => {
  return (
    <div
      className={styles.grid_container}
      style={{ gridTemplateRows: getRows().join(" ") }}
    >
      <TimeSlots />
      <DaySlots />

      {sessions.map((session) => {
        return (
          <div
            style={{
              gridColumn: session.col,
              gridRow: session.row,
              border: "1px solid black",
            }}
            onClick={() => console.log("item clicked!")}
          >
            {session.name}
          </div>
        );
      })}
    </div>
  );
};
