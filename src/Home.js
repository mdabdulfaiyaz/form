import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";

import styles from "./styles";
import { BACKEND_URL } from './apiConfig';

const MESSAGES = {
  nameError: "This field is required.",
  emailError: "Email is not valid.",
  mobileError: "Phone number must be valid and contain 10 digits.",
  fileError: "Please select a file",
  fileUploadSuccess: "Successfully uploaded the file",
  fileUploadFailure: "Error while uploading the file"
}

const Home = () => {
  const classes = styles();

  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: ''
  })

  const [image, setImage] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [fileError, setFileError] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    validate(name, value);
    setUser({ ...user, [name]: value });
  };

  const validate = (type, value) => {
    if (type === 'name') {
      // err.name = value === '';
      setNameError(value === '');
    } else if (type === 'email') {
      // err.email = !(/.+@.+..+/).test(value);
      setEmailError(!(/.+@.+..+/).test(value));
    } else if (type === "mobile") {
      // err.mobile = !(/^[6-9]\d{9}$/).test(value);
      setMobileError(!(/^[6-9]\d{9}$/).test(value));
    } else {
      setFileError(value === '');
    }
  }

  const onFileUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setFileError(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (nameError !== undefined
      && emailError !== undefined
      && mobileError !== undefined
      && fileError !== ''
      && !nameError
      && !emailError
      && !mobileError
    ) {
      const formData = new FormData();
      formData.append("file", image);

      const url = BACKEND_URL + "/data/?name=" + user.name + "&email=" + user.email + "&mobile=" + user.mobile;
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      if (response.status === 201) {
        setUser({
          name: '',
          email: '',
          mobile: ''
        });
        setImage('');
        setUploadStatus('');
        setNameError('');
        setEmailError('');
        setMobileError('');
        setFileError('');
        setUploadStatus(true);
      } else {
        setUploadStatus(false);
      }
    } else {
      validate('name', user.name);
      validate('email', user.email);
      validate('mobile', user.mobile);
      validate('file', image);
    }
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid className={classes.main} item xs={12} sm={10} md={11} lg={8} xl={3} >
        <Grid className={classes.introduction} item xs={12} sm={8} md={7} lg={5} xl={3}>
          {uploadStatus !== '' && (uploadStatus
            ? <div className={classes.successMessage}>{MESSAGES.fileUploadSuccess}</div>
            : <div className={classes.failureMessage}>{MESSAGES.fileUploadFailure}</div>
          )}
          <form className={classes.flex} autoComplete="off" onSubmit={handleSubmit}>

            <TextField
              className={classes.inputs}
              label="Name"
              name='name'
              value={user.name}
              inputProps={{ maxLength: 25 }}
              error={nameError}
              helperText={nameError && MESSAGES.nameError}
              onChange={handleChange}
            />

            <TextField
              className={classes.inputs}
              label="Email"
              name='email'
              value={user.email}
              error={emailError}
              helperText={emailError && MESSAGES.emailError}
              onChange={handleChange}
            />

            <TextField
              className={classes.inputs}
              label="Mobile"
              name='mobile'
              value={user.mobile}
              onChange={handleChange}
              inputProps={{ maxLength: 10 }}
              error={mobileError}
              helperText={mobileError && MESSAGES.mobileError}
            />

            <div>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={onFileUpload}
              />
              <label htmlFor="contained-button-file">
                <Button variant="outlined" component="span">
                  Choose File
                </Button>
                {image && <span className={classes.imageName}>{image.name} selected</span>}
                {fileError && <span className={classes.imageErrorMessage}>{MESSAGES.fileError}</span>}
              </label>
            </div>
            <Button className={classes.submitButton} variant="contained" type="submit" color="secondary">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid className={classes.img} item xs={4} sm={7} md={6} lg={5} xl={3}></Grid>
      </Grid>
    </Grid>
  );
}

export default Home;