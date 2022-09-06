// import { CSSProperties } from "@mui/styled-engine";
import { memo, useEffect, useState, VFC, CSSProperties } from "react";
import { Sentence } from "./Sentence";

interface Props {
  sentence: string;
  existIllust: boolean;
  lineStyle: 'full' | 'nonFull';
  imagePath?: string;
  displayImage?: boolean;
  displayPosition?: 'right' | 'left';
};

function ImageAndSentence(props: Props, displayImage: boolean) {
  ;
}

export const Story: VFC = memo(() => {
  const [ text, setText ] = useState<String>();
  const [ metaData, setMetaData ] = useState<any>();

  useEffect(() => {
    const fetch_data = async () => {
      const response = await fetch(`${window.location.origin}/assets/kaijin/DALL-E2/metadata.json`);
      const body = await response.json();
      setMetaData(body);
    }
    fetch_data();

    const fetch_text = async () => {
      const response = await fetch(`${window.location.origin}/assets/kaijin/text.txt`);
      const body = await response.text();
      setText(body);
    };
    fetch_text();
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
              <>
                <div key={`book_paragraph_${n}`}>
                  <br/>
                  <div style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}>
                    {lineData[0].name}
                  </div>
                </div>
                <Sentence
                  sentence={str}
                  existIllust={true}
                  imagePath={`${window.location.origin}/assets/kaijin/DALL-E2/${imageData[0].filename[0]}`}
                  displayImage={display}
                  displayPosition={illust_idx % 2 === 0 ? 'left' : 'right'}
                  lineStyle={'nonFull'}
                />
              </>
            )
          } else {
            return (
              <>
                <div key={`book_paragraph_${n}`}>
                  <br/>
                  <div style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}>
                    {lineData[0].name}
                  </div>
                </div>
                <Sentence
                  sentence={str}
                  existIllust={false}
                  lineStyle={'nonFull'}
                />
              </>
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
              <Sentence
                sentence={str}
                existIllust={true}
                imagePath={`${window.location.origin}/assets/kaijin/DALL-E2/${imageData[0].filename[0]}`}
                displayImage={display}
                displayPosition={illust_idx % 2 === 0 ? 'left' : 'right'}
                lineStyle={'nonFull'}
              />
            )
          } else {
            return (
              <Sentence
                sentence={str}
                existIllust={false}
                lineStyle={'nonFull'}
              />
            )
          }
        }
      })}
    </>
  )
})
