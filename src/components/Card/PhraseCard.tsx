import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {getTextColor} from "../../utilities";

type PhraseCardProps = {
  text: string;
  color: string;
}

const PhraseCard: React.FC<PhraseCardProps> = ({ text, color }) => {
  return (
    <Card style={{backgroundColor: color}}>
      <CardContent>
        <Typography style={{ color: getTextColor(color) }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhraseCard;
