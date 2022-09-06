import { CSSProperties, useState } from "react";
import { IllustlationDialog } from "./IllustlationDialog";
import '../../../style/illustlation.css';

interface Props {
  path: string | undefined;
  sentence: string;
  enSentence?: string;
  display: boolean;
  displayPosition?: 'right' | 'left';
}

export function Illustlation(props: Props) {
  const imageStyle: CSSProperties = {
    float: props.displayPosition,
    margin: '15px',
    width: '250px',
    height: '250px',
    overflow: 'hidden',
    marginLeft: props.displayPosition === 'left' ? '0px' : '15px',
    marginRight: props.displayPosition === 'left' ? '15px' : '0px',
  }
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
          style={imageStyle}
          onMouseDown={() => {
            setIsOpen(true);
          }}
          className={'illustlation'}
        />
        <IllustlationDialog
          enSentence={props.enSentence}
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
