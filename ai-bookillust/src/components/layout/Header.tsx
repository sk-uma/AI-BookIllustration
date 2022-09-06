import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function MyAppBar() {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate('/');
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Button
            sx={{
              color: '#fff',
            }}
            onClick={onHomeClick}
          >
            <Typography
              variant="h6"
              component="div"
            >
              AI挿絵
            </Typography>
          </Button>
          <div style={{ flexGrow: 1 }}></div>
          <Box>
            <Button
              sx={{
                color: '#fff',
              }}
              onClick={onHomeClick}
            >
              作品一覧
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
    </Fragment>
  )
}
