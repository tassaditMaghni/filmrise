import { makeStyles } from "@mui/styles";

export default makeStyles((theme) =>({
   movie: {
    
    padding: '10px'

   },
   links:{
      alignItems:'center',
      fontWeight: 'bolder',
      textDecoration:'none',
      [theme.breakpoints.up('xs')]: {
         display: 'flex',
         flexDirection: 'column',
      },
      '&:hover': {
         cursor: 'pointer',
         textDecoration:'none',
      },
      marginBottom:'20px',
   },
   image : {
      borderRadius: '20px',
      height: '270px',
      marginBottom:'10px',
      '&:hover': {
         transform: 'scale(1.05)',

      }

   },
   title : {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: 0,
    textAlign: 'center',
   }
}));