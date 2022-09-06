import { Grid, Stack } from "@mui/material";
import { memo, VFC } from "react";
import { bookInterface, booklist } from "../../constant/bookList";
import { BookCard } from "../organisms/Home/BookCard";

export const Home: VFC = memo(() => {
  let bookl: Array<bookInterface> = booklist;

  return (
    <div style={{width: '95%', margin: 'auto'}}>
      <Grid container spacing={1} style={{ justifyContent: 'left' }}>
        {bookl.map((data: bookInterface, n: number) => {
          return (
            <Grid item key={n} xs={12} md={6} lg={4} xl={3} style={{minWidth: '350px'}}>
              <BookCard
                titleId={data.titleId}
                illustrator={data.illustrator}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
});
