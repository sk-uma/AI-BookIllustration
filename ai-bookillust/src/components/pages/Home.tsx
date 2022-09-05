import { Text } from "@chakra-ui/react";
import { Box } from "@mui/material";
import { memo, VFC, CSSProperties } from "react";
import AppBar from "../layout/Header";
import { Book } from "./Book";

export const Home: VFC = memo(() => {
  const imageRightStyle: CSSProperties = {
    float: 'right',
    margin: '15px',
    width: '250px',
    height: '250px',
  }
  const imageLeftStyle: CSSProperties = {
    float: 'left',
    margin: '15px',
    width: '250px',
    height: '250px',
  }

  return (
    <>
      <AppBar/>
      <Book/>
    </>
  )
});
