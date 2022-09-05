import { memo, useEffect, useState, VFC } from "react";
import { Story } from "../organisms/Book/Story";

export const Book: VFC = memo(() => {

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
      <Story />
      {/* <br/> */}
    </div>
  )
});
