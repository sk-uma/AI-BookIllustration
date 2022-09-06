import { Box, Button, ButtonBase, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from "react-router-dom";
import { bookInterface, booklist } from "../../../constant/bookList";

interface Props {
  titleId: string;
  illustrator: string;
};

export function BookCard(props: Props) {
  let book = booklist.filter((data: bookInterface) => {
    return data.titleId === props.titleId && data.illustrator === props.illustrator
  });
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/book?titleId=${props.titleId}&illustrator=${props.illustrator}`);
  };

  return (
    <Card>
      <ButtonBase
        onClick={onClick}
        sx={{
          width: '100%',
          justifyContent: 'start',
          textAlign: 'left'
        }}
      >
      <Stack direction="row">
      <img
        style={{width: '120px'}}
        src={`${window.location.origin}/assets/${props.titleId}/${props.illustrator}/${book[0].headerPath}`}
      />
      <Box sx={{marginTop: 'auto', marginBottom: 'auto'}}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>
            {book[0].title}
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'gray' }}>
            <span>
              著・{book[0].auther}<br/>
            </span>
            <span>
              絵・{book[0].illustrator}
            </span>
          </Typography>
        </CardContent>
      </Box>
      </Stack>
      </ButtonBase>
    </Card>
  );
}
