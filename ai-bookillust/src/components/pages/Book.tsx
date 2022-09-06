import { Box } from "@mui/material";
import { memo, VFC } from "react";
import { useLocation } from "react-router-dom";
import { bookInterface, booklist } from "../../constant/bookList";
import { Story } from "../organisms/Book/Story";
import { Title } from "../organisms/Book/Title";

export const Book: VFC = memo(() => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  let titleId = query.get('titleId');
  let illustrator = query.get('illustrator');
  let bookl: Array<bookInterface> = booklist.filter((data: any) => {
    return data.titleId === titleId && data.illustrator === illustrator;
  });

  if (bookl.length !== 0) {
    return (
      <>
      <div style={{textAlign: 'justify'}}>
        <Title
          title={bookl[0].title}
          author={bookl[0].auther}
          illustrator={bookl[0].illustrator}
          imagePath={`${window.location.origin}/assets/kaijin/DALL-E2/${bookl[0].headerPath}`}
        />
        <Box style={{width: '85%', maxWidth: '1200px', margin: 'auto'}}>
          <Story
            titleId={bookl[0].titleId}
            illustrator={bookl[0].illustrator}
          />
        </Box>
      </div>
      </>
    )
  } else {
    return (<></>);
  }
});
