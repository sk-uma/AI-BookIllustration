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
  const [ displayImage, setDisplayImage ] = useState<boolean|undefined>(props.displayImage);

  if (props.existIllust) {
    if (displayImage) {
      return (
        <>
          <a
            onMouseDown={() => {
              setDisplayImage(false);
            }}
            style={{
              textDecoration: 'underline',
              textDecorationColor: '#80cbc4',
              textDecorationThickness: '1.5px',
            }}
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
            style={{
              textDecoration: 'underline',
              textDecorationColor: '#a1887f',
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
