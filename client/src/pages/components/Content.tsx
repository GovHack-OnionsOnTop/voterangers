import * as React from 'react';
import { Typography, createStyles, Theme, Container, Slider, Grid, CardContent, Card, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CustomTable from '../shared-components/CustomTable';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#3a8589',
      height: 100,
      width: 300,
      padding: '13px 0',
    },
    itemTitle: {
      color: "#0d1e1f"
    },
    itemSliderRed: {
      '&$disabledRed': {
        color: "#ff0000"
      }
    },
    disabledRed: {},
  }),
);
export default function Content() {
  const classes = useStyles();

  return (
    <div>
    <Container>
      <Card className={classes.root}>
        <CardContent>
          <Typography id="continuous-slider" gutterBottom className={classes.itemTitle}>
            PENDING APPROVAL
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <Slider disabled classes={{ root: classes.itemSliderRed, disabled: classes.disabledRed }}
                aria-label="custom thumb label"
                defaultValue={20}
                color="secondary"
              />
            </Grid>
            <Grid item style={{margin: 0, padding: 0}}>
              <h1 style={{ color: '#606b6c', margin: 0 }}>20</h1>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Custom empty icon</Typography>
            <Rating
              name="customized-empty"
              value={2}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
    <CustomTable />
    </div>
  );
}