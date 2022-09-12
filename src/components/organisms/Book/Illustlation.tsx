import { useState } from "react";
import { IllustlationDialog } from "./IllustlationDialog";
// import '../../../style/illustlation.css';
import { Box, Fade, Grow, SxProps } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Props {
  path: string | undefined;
  sentence: string;
  enSentence?: string;
  display: boolean;
  displayPosition?: 'right' | 'left';
}


export function Illustlation(props: Props) {
  const imageStyle: SxProps = {
    float: props.displayPosition,
    margin: '15px',
    width: '250px',
    height: '250px',
    overflow: 'hidden',
    borderRadius: '5px',
    marginLeft: props.displayPosition === 'left' ? '0px' : '15px',
    marginRight: props.displayPosition === 'left' ? '15px' : '0px',
    transition: '1s all',
    '&:hover': {
      // transform: 'scale(1.2, 1.2)',
      overflow: 'hidden',
      transform: 'scale(0.95, 0.95)',
    },
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
            sx={imageStyle}
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
