import { textDecoration } from "@chakra-ui/react";
import { Button } from "@mui/material";
import { memo, useState, VFC, CSSProperties, useEffect } from "react";
import { Illustlation } from "./Illustlation";

interface Props {
  sentence: string;
  existIllust: boolean;
  lineStyle: 'full' | 'nonFull';
  imagePath?: string;
  displayImage?: boolean;
  displayPosition?: 'right' | 'left';
};

export function Sentence(props: Props) {
  const [ displayImage, setDisplayImage ] = useState<boolean|undefined>(props.displayImage);
  let ableStyle: CSSProperties = {};
  let disableStyle: CSSProperties = {};
  if (props.lineStyle === 'nonFull') {
    ableStyle = {
      textDecoration: 'underline',
      textDecorationColor: '#80cbc4',
      textDecorationThickness: '1.5px',
    }
    disableStyle = {
      textDecoration: 'underline',
      textDecorationColor: '#a1887f',
      textDecorationThickness: '1.5px',
    }
  } else {
    ableStyle = {
      textDecoration: 'underline',
      textDecorationColor: '#80cbc4',
      textDecorationThickness: '1.5px',
    }
  }

  if (props.existIllust) {
    if (displayImage) {
      return (
        <>
          <a
            onMouseDown={() => {
              setDisplayImage(false);
            }}
            style={ableStyle}
          >
            {props.sentence}
          </a>
          <Illustlation
            path={props.imagePath}
            display={true}
            sentence={props.sentence}
            displayPosition={props.displayPosition}
          />
        </>
      )
    } else {
      return (
        <>
          <a
            onMouseDown={() => {
              setDisplayImage(true);
            }}
            style={disableStyle}
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
