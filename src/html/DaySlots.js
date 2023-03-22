import styles from "@/styles/GridSlots.module.css";

export const DaySlots = () => {
  //   const style = {
  //     borderBottom: "1px solid black",
  //     borderRight: "1px solid black",
  //   };
  return (
    // <div style={{ border: "1px solid black", gridColumn: "days" }}>
    <>
      <span class={styles.day_slot} style={{ gridRow: "day-Mon-1" }}>
        Mon
      </span>

      <span class={styles.day_slot} style={{ gridRow: "day-Mon-2" }}>
        1
      </span>

      <span class={styles.day_slot} style={{ gridRow: "day-Mon-3" }}>
        2
      </span>
    </>
    // </div>
  );
};
