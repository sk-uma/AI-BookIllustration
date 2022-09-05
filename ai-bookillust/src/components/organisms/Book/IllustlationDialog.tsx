import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  sentence: string;
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
        <img src={path} style={style} />
      </DialogContent>
      <DialogContent>
        {sentence}
      </DialogContent>
    </Dialog>
  );
}
