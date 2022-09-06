import { AppBar, Box, Button, CssBaseline, Stack, Toolbar, Typography } from "@mui/material";
import { CSSProperties, Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function MyAppBar() {
  const footerStyle: CSSProperties = {
    width: '100%',
    top: '100vh',
    position: 'sticky',
    backgroundColor: '#3e2723',
    color: '#efebe9',
    height: '50px',
    textAlign: 'center',
    fontSize: 12,
  }

  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate('/');
  };

  return (
    <Fragment>
      <CssBaseline />
      <Stack spacing={2} style={{margin: 0, padding: 0, height: '100vh'}}>
      <div>
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
      </div>
      <div style={footerStyle}>
        <p>(C) sk-uma</p>
      </div>
      </Stack>
    </Fragment>
  )
}
