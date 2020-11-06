import styles from "./Button.module.scss";
import { Button } from "antd";

export function ButtonComponent() {
  return (
    <Button
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </Button>
  );
}
