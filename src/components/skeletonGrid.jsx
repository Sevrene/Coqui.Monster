import { Grid, Skeleton } from "@mui/material";

function SkeletonGrid() {
  return (
    <Grid container spacing={3} sx={{ maxWidth: "70%", margin: "auto" }}>
      <Grid item xs={8}>
        <Skeleton variant="rectangular" height={500} />
      </Grid>
      <Grid item xs={4}>
        <Skeleton variant="rectangular" height={200} sx={{ marginBottom: 5 }} />
        <Skeleton variant="rectangular" height={250} />
      </Grid>
    </Grid>
  );
}

export default SkeletonGrid;
