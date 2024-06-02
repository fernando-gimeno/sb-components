import "./MyLabel.css";

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * All characters will be uppercase
   */
  allCaps?: boolean;

  /**
   * Color of the label
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Custom font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps,
  color,
  fontColor,
}: Props) => {
  return (
    <span className={`${size} ${color || ""}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
