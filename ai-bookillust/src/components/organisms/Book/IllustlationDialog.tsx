import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  sentence: string;
  enSentence?: string;
  path: string | undefined;
}

export function IllustlationDialog(props: Props) {
  const { onClose, open, sentence, path } = props;
  const style: CSSProperties = {
    width: '100%',
    margin: 'auto'
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>生成画像</DialogTitle>
      <DialogContent>
        <img src={path} style={style} alt="generate by ai" />
      </DialogContent>
      <DialogContent>
        {sentence}<br/>
        {props.enSentence}
      </DialogContent>
    </Dialog>
  );
}
