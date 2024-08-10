import './MyLabel.css'

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Size of the label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
  * Whether to display the text in all caps
  */
  allCaps?: boolean;

  /**
   * Color of the text
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  return (
    <span 
      className={`${size} ${color} ${label}`}
      style={{ color: fontColor }}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
