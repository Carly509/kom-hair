import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
navbar: {
    background: 'linear-gradient(90.64deg, rgba(155, 31, 120, 0.39) 4.53%, #9B1F78 26.65%)',
    '& a': {
        color: '#fff',
        marginLeft: 10,
    }
},
brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',  
  },
  grow: {
      flexGrow: 1,
  },
main: {
    minHeight: '80vh',
},
footer: {
    background: 'linear-gradient(90.64deg, rgba(155, 31, 120, 0.39) 4.53%, #9B1F78 26.65%)',
    textAlign: 'center',
},
});

export default useStyles;
