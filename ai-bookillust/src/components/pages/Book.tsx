import { Box } from "@mui/material";
import { memo, useEffect, useState, VFC } from "react";
import { Illustlation } from "../organisms/Book/Illustlation";
import { Story } from "../organisms/Book/Story";
import { Title } from "../organisms/Book/Title";

export const Book: VFC = memo(() => {

  // console.log(metaData?.paragraph);

  return (
    <div style={{textAlign: 'justify'}}>
      <Title
        title={'怪人二十面相'}
        author={'江戸川乱歩'}
        illustrator={'DALL-E2'}
        imagePath={`${window.location.origin}/assets/kaijin/DALL-E2/0000000042_0000000000.jpg`}
      />
      <Box style={{width: '85%', maxWidth: '1200px', margin: 'auto'}}>
        <Story />
      </Box>
    </div>
  )
});
