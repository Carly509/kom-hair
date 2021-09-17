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
section: {
    marginTop: 10,
    marginBottom: 10,
},
form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem' },
  // search
//   searchSection: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  sort: {
    marginRight: 5,
  },

  fullContainer: { height: '100vh' },
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250,
    },
  },
  button: {
    width: 239,
    height: 49,
    background: '#9B1F78',
  },
  productName: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#000000',
  },
  productPrice: {
    fontFamily: 'Poppins',
    fontSize: '18px',
    lineHeight: '27px',
    color: 'rgba(0, 0, 0, 0.69)',
    marginTop: -20,
  },
  productDescription: {
    fontFamily: 'Poppins',
    fontSize: '13px',
    lineHeight: '19px',
  },
  cancelButton: {
    float:'right',

  },
});

export default useStyles;
