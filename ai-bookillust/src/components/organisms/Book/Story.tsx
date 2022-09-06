// import { CSSProperties } from "@mui/styled-engine";
import { memo, useEffect, useState, VFC, CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { Sentence } from "./Sentence";

interface Props {
  titleId: string;
  illustrator: string;
};

export function Story(props: Props) {
  const [ text, setText ] = useState<String>();
  const [ enText, setEnText ] = useState<any>();
  const [ metaData, setMetaData ] = useState<any>();
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  let title = props.titleId;
  let model = props.illustrator;
  let lineStyle: 'full' | 'nonFull' = model === 'DALL-E2' ? 'nonFull' : 'full';

  useEffect(() => {
    const fetch_data = async () => {
      const response = await fetch(`${window.location.origin}/assets/${title}/${model}/metadata.json`);
      const body = await response.json();
      setMetaData(body);
    }
    fetch_data();

    const fetch_text = async () => {
      const response = await fetch(`${window.location.origin}/assets/${title}/text.txt`);
      const body = await response.text();
      setText(body);
    };
    fetch_text();

    const fetch_enText = async () => {
      const response = await fetch(`${window.location.origin}/assets/${title}/text.en`);
      const body = await response.text();
      let enTextArray = body.split('\n');
      setEnText(enTextArray);
    };
    fetch_enText();
  }, []);

  let latest_n = -1000;
  let illust_idx = 0;
  return (
    <>
      {text?.split('\r\n').map((str: string, n: number) => {
        let lineData = metaData?.paragraph.filter((data: any) => {
          return data.line == n
        })
        let image_n = 0;
        let imageData = metaData?.images.filter((data: any, i: number) => {
          if (data.line == n) {
            image_n = i;
          }
          return data.line == n
        })
        if (lineData?.length !== 0) {
          if (imageData?.length !== 0) {
            let display = false;
            if (latest_n + 50 < n) {
              display = true;
              latest_n = n;
            }
            illust_idx += 1;
            return (
              <span key={`book_paragraph_${n}`}>
                <div>
                  <br/>
                  <div style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}>
                    {lineData[0].name}
                  </div>
                </div>
                <Sentence
                  sentence={str}
                  enSentence={enText ? enText[n]: undefined}
                  existIllust={true}
                  imagePath={`${window.location.origin}/assets/${title}/${model}/${imageData[0].filename[0]}`}
                  displayImage={display}
                  displayPosition={illust_idx % 2 === 0 ? 'left' : 'right'}
                  lineStyle={lineStyle}
                />
              </span>
            )
          } else {
            return (
              <span key={`book_paragraph_${n}`}>
                <div>
                  <br/>
                  <div style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}>
                    {lineData[0].name}
                  </div>
                </div>
                <Sentence
                  sentence={str}
                  existIllust={false}
                  lineStyle={lineStyle}
                />
              </span>
            )
          }
        } else {
          if (imageData?.length !== 0) {
            let display = false;
            if (latest_n + 50 < n) {
              display = true;
              latest_n = n;
            }
            illust_idx += 1;
            return (
              <span key={`book_paragraph_${n}`}>
                <Sentence
                  sentence={str}
                  enSentence={enText ? enText[n]: undefined}
                  existIllust={true}
                  imagePath={`${window.location.origin}/assets/${title}/${model}/${imageData[0].filename[0]}`}
                  displayImage={display}
                  displayPosition={illust_idx % 2 === 0 ? 'left' : 'right'}
                  lineStyle={lineStyle}
                />
              </span>
            )
          } else {
            return (
              <span key={`book_paragraph_${n}`}>
                <Sentence
                  sentence={str}
                  existIllust={false}
                  lineStyle={lineStyle}
                />
              </span>
            )
          }
        }
      })}
    </>
  )
}
