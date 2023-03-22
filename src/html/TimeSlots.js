import styles from "@/styles/GridSlots.module.css";

export const TimeSlots = () => {
  //   const style = { borderBottom: "1px solid black" };
  return (
    <>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "days", gridRow: "times" }}
      ></span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-08:00", gridRow: "times" }}
      >
        08:00
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-08:30", gridRow: "times" }}
      >
        08:30
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-09:00", gridRow: "times" }}
      >
        09:00
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-09:30", gridRow: "times" }}
      >
        09:30
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-10:00", gridRow: "times" }}
      >
        10:00
      </span>

      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-10:30", gridRow: "times" }}
      >
        10:30
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-11:00", gridRow: "times" }}
      >
        11:00
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-11:30", gridRow: "times" }}
      >
        11:30
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-12:00", gridRow: "times" }}
      >
        12:00
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-12:30", gridRow: "times" }}
      >
        12:30
      </span>
      <span
        class={styles.time_slot}
        style={{ gridColumn: "time-13:00", gridRow: "times" }}
      >
        13:00
      </span>
    </>
  );
};
