import { Typography } from "@mui/material";

export function BlockTitle({ title }) {
  return (
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
  );
}