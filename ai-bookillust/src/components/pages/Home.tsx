import { Text } from "@chakra-ui/react";
import { Box } from "@mui/material";
import { memo, VFC, CSSProperties } from "react";
import AppBar from "../layout/Header";
import { BookCard } from "../organisms/Home/BookCard";
import { Book } from "./Book";

export const Home: VFC = memo(() => {
  return (
    <>
      <BookCard
        titleId={"kaijin"}
        illustrator={"DALL-E2"}
      />
    </>
  )
});
