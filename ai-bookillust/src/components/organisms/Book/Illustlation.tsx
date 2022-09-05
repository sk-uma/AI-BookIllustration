import { CSSProperties, useState } from "react";
import { IllustlationDialog } from "./IllustlationDialog";

interface Props {
  path: string | undefined;
  sentence: string;
  display: boolean;
  style: CSSProperties;
}

export function Illustlation(props: Props) {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleOpen = () => {
    setIsOpen(true);
  }

  if (props.display) {
    return (
      <>
        <img
          src={props.path}
          style={props.style}
          onMouseDown={() => {
            setIsOpen(true);
          }}
        />
        <IllustlationDialog
          open={isOpen}
          onClose={handleClose}
          sentence={props.sentence}
          path={props.path}
        />
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
}
