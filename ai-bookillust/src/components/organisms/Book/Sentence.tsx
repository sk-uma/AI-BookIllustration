import { textDecoration } from "@chakra-ui/react";
import { Button } from "@mui/material";
import { memo, useState, VFC, CSSProperties, useEffect } from "react";
import { Illustlation } from "./Illustlation";

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

  if (props.existIllust) {
    if (displayImage) {
      // console.log(displayImage, props.displayImage);
      return (
        <>
          <a
            onMouseDown={() => {
              // console.log(props.sentence);
              setDisplayImage(true);
            }}
          >
            {props.sentence}
          </a>
          {/* <img
            src={props.imagePath}
            style={imageLeftStyle}
          /> */}
          <Illustlation
            path={props.imagePath}
            display={true}
            style={imageLeftStyle}
            sentence={props.sentence}
          />
        </>
      )
    } else {
      return (
        <>
          <a
            onMouseDown={() => {
              // console.log(props.sentence);
              setDisplayImage(true);
            }}
            style={{
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
