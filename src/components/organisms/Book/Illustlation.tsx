import { CSSProperties, useState } from "react";
import { IllustlationDialog } from "./IllustlationDialog";
import '../../../style/illustlation.css';
import { Box } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";

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
  const wh = useWindowSize();
  const width = wh[0];
  // height = height * -1 * -1;

  const handleClose = () => {
    setIsOpen(false);
  }

  if (props.display) {
    if (width < 600) {
      return (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={props.path}
              style={{float: 'none', width: '90%'}}
              onMouseDown={() => {
                setIsOpen(true);
              }}
              className={'illustlation'}
          />
          </Box>
          <IllustlationDialog
            enSentence={props.enSentence}
            open={isOpen}
            onClose={handleClose}
            sentence={props.sentence}
            path={props.path}
          />
        </>
      );
    } else {
      return (
        <>
          <Box
            component="img"
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
    }
  } else {
    return (
      <>
      </>
    )
  }
}
