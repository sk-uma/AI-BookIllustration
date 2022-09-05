import { textDecoration } from "@chakra-ui/react";
import { Button } from "@mui/material";
import { memo, useState, VFC, CSSProperties, useEffect } from "react";

interface Props {
  sentence: string;
  existIllust: boolean;
  imagePath?: string;
  displayImage?: boolean;
  displayPosition?: 'right' | 'left';
};

export function Sentence(props: Props) {
  const imageLeftStyle: CSSProperties = {
    float: props.displayPosition,
    margin: '15px',
    width: '250px',
    height: '250px',
    marginLeft: props.displayPosition === 'left' ? '0px' : '15px',
    marginRight: props.displayPosition === 'left' ? '15px' : '0px',
  }

  const [ displayImage, setDisplayImage ] = useState<boolean|undefined>(props.displayImage);
  // setDisplayImage(false);

  // useEffect(() => {

  // }, [displayImage]);

  if (props.existIllust) {
    if (displayImage) {
      console.log(displayImage, props.displayImage);
      return (
        <>
          <a
            onMouseDown={() => {
              console.log(props.sentence);
              setDisplayImage(true);
            }}
            style={{backgroundColor: '#efebe9'}}
          >
            {props.sentence}
          </a>
          <img
            src={props.imagePath}
            style={imageLeftStyle}
          />
        </>
      )
    } else {
      return (
        <>
          <a
            onMouseDown={() => {
              console.log(props.sentence);
              setDisplayImage(true);
            }}
            style={{
              backgroundColor: '#efebe9',
              textDecoration: 'underline',
              textDecorationColor: '#795548',
              textDecorationThickness: '1.5px',
            }}
          >
            {props.sentence}
          </a>
        </>
      )
    }
  } else {
    return (
      <>
        {props.sentence}
      </>
    )
  }
}
