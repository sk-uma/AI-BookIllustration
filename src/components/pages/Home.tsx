import { Grid, Typography, Divider } from "@mui/material";
import { memo, VFC } from "react";
import { bookInterface, booklist } from "../../constant/bookList";
import { MyHelmet } from "../layout/MyHelmet";
import { BookCard } from "../organisms/Home/BookCard";

export const Home: VFC = memo(() => {
  let bookl: Array<bookInterface> = booklist;

  return (
    <div style={{width: '95%', margin: 'auto'}}>
      <MyHelmet page={"top"}/>
      <Typography style={{ fontSize: 23, textAlign: 'center', fontWeight: 'bold' }}>
        <p>作品一覧</p>
        <Divider/>
      </Typography>
      <Grid container spacing={1} style={{ justifyContent: 'left', marginTop: '10px' }}>
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
