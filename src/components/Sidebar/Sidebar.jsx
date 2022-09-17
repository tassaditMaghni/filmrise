import React, { useEffect } from "react";
import { CircularProgress, Box, ListItemIcon, ListSubheader,ListItemText, ListItem, List, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from './styles';
import { useGetGenresQuery } from "../../services/TMDB";
import genreIcons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'

const categories = [
  { label: 'Popular', value : 'popular'},
  { label: 'Top Rated', value : 'top_rated'},
  { label: 'Upcoming', value : 'upcoming'}
];
 




    const Sidebar = (setMobileOpen) => {
    const theme = useTheme();
    const classes = useStyles();
    const {data, isFetching} = useGetGenresQuery();
    const dispatch = useDispatch();
    const {genreIdOrCategoryName } = useSelector((state)=>state.currentGenreOrCategory)

  
    const redLogo = "https://fontmeme.com/permalink/220811/b3036d1b559443ef405fff69a72cfe38.png";
    const blueLogo = "https://fontmeme.com/permalink/220811/34dc8d3b8652c5d12012330a9782dee3.png";


  return (
    <>
        <Link to="/" className={classes.imageLink}>
         <img className={classes.image}
            src ={`${theme.palette.mode} ≡ 'light'` ?  redLogo : blueLogo }
            alt="Filmrise logo"
         />
        </Link>
        <Divider />
        <List>
          <ListSubheader>Categories</ListSubheader>
          {categories.map(({label , value}) =>(
              <Link key={value} className={classes.links} to="/">
                <ListItem onClick={()=> dispatch(selectGenreOrCategory(value))} button >
                  <ListItemIcon>
                    <img src={genreIcons[label.toLowerCase()]} className ={classes.genreImage} height={30} />
                  </ListItemIcon> 
                  <ListItemText primary={label} />
                </ListItem>
              </Link>
              ))}
        </List>
        <Divider />
        <List>
          <ListSubheader>Genres</ListSubheader>
          {isFetching ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) :  data.genres.map(({name , id}) =>(
              <Link key={name} className={classes.links} to="/">
                <ListItem onClick={()=> dispatch(selectGenreOrCategory(id))} button >
                  <ListItemIcon>
                    <img src={genreIcons[name.toLowerCase()]} className ={classes.genreImage} height={30} />
                  </ListItemIcon> 
                  <ListItemText primary={name} />
                </ListItem>
              </Link>
              ))}
        </List>
    </>
  )
}
export default Sidebar;
