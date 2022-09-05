import { memo, useEffect, useState, VFC } from "react";

export const Book: VFC = memo(() => {
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

  return (
    <div style={{textAlign: 'justify'}}>
      <>
        <div style={{textAlign: 'center'}}>
          怪人二十面相<br/>
        </div>
        <div style={{marginRight: '10px', textAlign: 'right'}}>
          <div>
            著・江戸川乱歩
          </div>
          <div>
            絵・DALL-E2
          </div>
        </div>
      </>
      <br/>

      {text?.split('\r\n').map((str: string, n: number) => {
        let lineData = metaData?.paragraph.filter((data: any) => {
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
          return (
            <a key={n}>{str}</a>
          )
        }
      })}
    </div>
  )
});
