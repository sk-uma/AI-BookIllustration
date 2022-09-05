import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function MyAppBar() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            AI挿絵
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
    </Fragment>
  )
}
