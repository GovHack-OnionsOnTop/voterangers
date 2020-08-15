import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Skeleton from '@material-ui/lab/Skeleton';
import { getGridData } from './GridData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    tile: {
      margin: 10
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }),
);
interface GridTile {
  img:string
  cols:number
  alt:string
  id:number
  title:string
  author:string
}
export default function CustomGrid() {
  const classes = useStyles();
  const gridData = getGridData();
  return (
    <GridList className={classes.root} cellHeight={200} cols={7}>
      {gridData.map((tile:GridTile) => (
        <GridListTile className={classes.tile} key={tile.id} cols={tile.cols || 1}>
          {tile.img? (<img src={tile.img} alt="" />) : (<Skeleton variant="rect" width={200} height={200} />)}
          <GridListTileBar
            title={tile.title}
            titlePosition="top"
            actionIcon={
              <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                <StarBorderIcon />
              </IconButton>
            }
            actionPosition="left"
            className={classes.titleBar}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}
