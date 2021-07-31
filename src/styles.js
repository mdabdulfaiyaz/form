import { makeStyles } from "@material-ui/core/styles";
import Image from "./assets/rocket.jpg"

const styles = makeStyles((theme) => ({
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
    boxShadow: '1px 1px 18px -2px rgba(0,0,0,0.75)',
    padding: '7rem',
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      padding: '3rem',
      display: 'grid'
    },
  },
  img: {
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
  submitButton: {
    marginTop: 15
  },
  imageName: {
    marginLeft: 10
  },
  imageErrorMessage: {
    marginLeft: 10,
    color: '#bb1f1f',
  },
  successMessage: {
    marginBottom: 10,
    color: "green",
  },
  failureMessage: {
    marginBottom: 10,
    color: '#bb1f1f',
  }
}));

export default styles;