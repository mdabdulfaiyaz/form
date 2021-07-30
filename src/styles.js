import { makeStyles } from "@material-ui/core/styles";
import Image from "./assets/rocket.jpg"

const styles = makeStyles((theme) => ({
    root: { 
      color: 'white', 
    },
    main: {
      marginTop: '7rem',
      marginLeft: '25rem',
      display: 'flex', 
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0rem',
      },
      [theme.breakpoints.between('768', '1024')]: {
        marginLeft: '3rem',
      },
      [theme.breakpoints.between('1024', '1366')]: {
        marginTop: '15rem',
        margin: 'auto'
      },
    },
    introduction: {
      boxShadow: '1px 1px 18px -2px rgba(0,0,0,0.75)'
    },
    left: {
      padding: '6rem',
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      boxShadow: '17px 3px 18px -2px rgba(0,0,0,0.75)',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      },
    },
    flex: {
      padding: '7rem',
      backgroundColor: 'white',
      [theme.breakpoints.down('sm')]: {
        padding: '3rem',
        display: 'grid'
      },
    }, 
    inputs: {
      marginBottom: '2rem',
    },
    input: {
      display: 'none',
      [theme.breakpoints.down('sm')]: { 
        display: 'none',
        color: 'red',
      },
    },
    btn:{ 
      marginLeft: '20px',
      [theme.breakpoints.down('xs')]: { 
        
        marginLeft: '20px'
      },
      [theme.breakpoints.up('sm')]: { 
        
        marginLeft: '103px',
        marginTop: '-57px'
      },
      [theme.breakpoints.between('280', '653')]: { 
        
        marginLeft: '103px',
        marginTop: '-57px'
      },
      [theme.breakpoints.between('411', '731')]: { 
        marginLeft: '15px',
        marginTop: '0px'
      },
    }
  }));

  export default styles;