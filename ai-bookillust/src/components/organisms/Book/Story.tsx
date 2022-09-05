// import { CSSProperties } from "@mui/styled-engine";
import { memo, useEffect, useState, VFC, CSSProperties } from "react";

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
              <a key={n}>
                {str}
              </a>
            </>
          )
        } else {
          // console.log(imageData?.length)
          if (imageData?.length !== 0 && latest_n + 50 < n) {
            latest_n = n;
            return (
              <a key={n}>
                <img 
                  src={`${window.location.origin}/assets/kaijin/DALL-E2/${imageData[0].filename[0]}`}
                  style={image_n % 2 === 0 ? imageLeftStyle : imageRightStyle}
                  // style={imageLeftStyle}
                />
                {str}
              </a>
            )
          } else {
            return (
              <a key={n}>
                {str}
              </a>
            )
          }
        }
      })}
    </>
  )
})
