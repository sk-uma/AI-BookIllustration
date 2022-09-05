// import { CSSProperties } from "@mui/styled-engine";
import { memo, useEffect, useState, VFC, CSSProperties } from "react";
import { Sentence } from "./Sentence";

export const Story: VFC = memo(() => {
  const imageRightStyle: CSSProperties = {
    float: 'right',
    margin: '15px',
    width: '250px',
    height: '250px',
    marginRight: '0px',
  }
  const imageLeftStyle: CSSProperties = {
    float: 'left',
    margin: '15px',
    width: '250px',
    height: '250px',
    marginLeft: '0px',
  }

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

  // console.log(metaData?.paragraph);

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
          return (
            <>
              <div key={`book_paragraph_${n}`}>
                <br/>
                # {lineData[0].name}
                <br/>
              </div>
              <Sentence
                sentence={str}
                existIllust={false}
              />
            </>
          )
        } else {
          // console.log(imageData?.length)
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
              />
            )
          } else {
            return (
              <Sentence
                sentence={str}
                existIllust={false}
              />
            )
          }
        }
      })}
    </>
  )
})
