import { Box } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  title: string;
  author: string;
  illustrator: string;
  imagePath: string;
}

export function Title(props: Props) {
  const headerStyle: CSSProperties = {
    width: '100%',
    backgroundImage: `url(${props.imagePath})`,
    backgroundSize: '100% auto',
    backgroundPositionY: '30%',
    marginBottom: '30px',
  }

  return (
    <Box style={headerStyle}>
      <div style={{backgroundColor: `rgba(255, 255, 255, 0.5)`}}>
        <div style={{textAlign: 'center', fontSize: '3em', paddingTop: '10px'}}>
          {props.title}<br/>
        </div>
        <div style={{marginRight: '15%', textAlign: 'right', paddingBottom: '10px'}}>
          <div>
            著・{props.author}
          </div>
          <div>
            絵・{props.illustrator}
          </div>
        </div>
      </div>
    </Box>
  )
}