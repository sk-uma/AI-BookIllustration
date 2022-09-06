import { useState, CSSProperties } from "react";
import { Illustlation } from "./Illustlation";

interface Props {
  sentence: string;
  enSentence?: string;
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
      textDecorationColor: '#a1887f',
      textDecorationThickness: '1.5px',
    }
    disableStyle = {
      textDecoration: 'underline',
      textDecorationColor: '#80cbc4',
      textDecorationThickness: '1.5px',
    }
  } else {
    ableStyle = {
      textDecoration: 'underline',
      textDecorationColor: '#a1887f',
      textDecorationThickness: '1.5px',
    }
  }

  if (props.existIllust) {
    if (displayImage) {
      return (
        <span>
          <span
            onMouseDown={() => {
              setDisplayImage(false);
            }}
            style={ableStyle}
          >
            {props.sentence}
          </span>
          <Illustlation
            path={props.imagePath}
            display={true}
            sentence={props.sentence}
            enSentence={props.enSentence}
            displayPosition={props.displayPosition}
          />
        </span>
      )
    } else {
      return (
          <span
            onMouseDown={() => {
              setDisplayImage(true);
            }}
            style={disableStyle}
          >
            {props.sentence}
          </span>
      )
    }
  } else {
    return (
      <span>
        {props.sentence}
      </span>
    )
  }
}
