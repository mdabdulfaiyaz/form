import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";

import styles from "./styles";
import { BACKEND_URL } from './apiConfig';

const ERROR_MESSAGES = {
  name: "This field is required.",
  email: "Email is not valid.",
  mobile: "Phone number must be valid and contain 10 digits.",
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
  const [errors, setErrors] = useState({})

  const handleChange = event => {
    const { name, value } = event.target;
    validate(name, value);
    setUser({ ...user, [name]: value });
  };

  const validate = (type, value) => {
    let err = { ...errors };
    if (type === 'name') {
      err.name = value === '';
    } else if (type === 'email') {
      err.email = !(/.+@.+..+/).test(value);
    } else {
      err.mobile = !(/^[6-9]\d{9}$/).test(value);
    }
    setErrors({ ...err })
  }

  const onFileUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (errors.name !== undefined
      && errors.email !== undefined
      && errors.mobile !== undefined
      && !errors.name
      && !errors.email
      && !errors.mobile
      && image !== ''
    ) {
      const formData = new FormData();
      formData.append("file", image);

      const url = BACKEND_URL + "/data/?name=" + user.name + "&email=" + user.email + "&mobile=" + user.mobile; 
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      if (response.status === 201) {
        setUploadStatus(true);
      } else {
        setUploadStatus(false);
      }
    }
  }
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid className={classes.main} item xs={12} sm={10} md={11} lg={8} xl={3} >
        <Grid className={classes.introduction} item xs={12} sm={8} md={7} lg={5} xl={3}>
          {uploadStatus !== '' && (uploadStatus
            ? <div>Successfully uploaded the file</div>
            : <div>Error while uploading the file</div>
          )}
          <form className={classes.flex} autoComplete="off" onSubmit={handleSubmit}>

            <TextField
              className={classes.inputs}
              label="Name"
              name='name'
              value={user.name}
              inputProps={{ maxLength: 25 }}
              error={errors.name}
              helperText={errors.name && ERROR_MESSAGES.name}
              onChange={handleChange}
            />

            <TextField
              className={classes.inputs}
              label="Email"
              name='email'
              value={user.email}
              error={errors.email}
              helperText={errors.email && ERROR_MESSAGES.email}
              onChange={handleChange}
            />

            <TextField
              className={classes.inputs}
              label="Mobile"
              name='mobile'
              value={user.mobile}
              onChange={handleChange}
              inputProps={{ maxLength: 10 }}
              error={errors.mobile}
              helperText={errors.mobile && ERROR_MESSAGES.mobile}
            />

            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={onFileUpload}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
              <Button className={classes.btn} variant="contained" type="submit" color="primary">
                Submit
              </Button>
            </label>
          </form>
        </Grid>
        <Grid className={classes.left} item xs={4} sm={7} md={6} lg={5} xl={3}></Grid>
      </Grid>
    </Grid>
  );
}

export default Home;