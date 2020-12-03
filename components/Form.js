import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

import styles from "./form.module.css";

const URL = "https://lzarcheryhomepage.herokuapp.com/";

const period = [
  {
    value: "平日",
    label: "平日",
  },
  {
    value: "假日",
    label: "假日",
  },
  {
    value: "不限",
    label: "不限",
  },
];

const time = [
  {
    value: "09:00-12:00",
    label: "09:00-12:00",
  },
  {
    value: "12:00-15:00",
    label: "12:00-15:00",
  },
  {
    value: "15:00-18:00",
    label: "15:00-18:00",
  },
  {
    value: "18:00-23:00",
    label: "18:00-23:00",
  },
];

class SignUp extends Component {
  state = {
    name: this.props.name,
    phone: this.props.phone,
    period: this.props.period,
    hour: this.props.hour,
    email: this.props.email,
    submitted: false,
  };

  submitHandler = (event) => {
    event.preventDefault();
    const userObj = { ...this.state };
    this.setState({ submitted: true });
    const header = {
      "Content-Type": "application/json",
    };
    axios
      .post(URL + "homepageUser", JSON.stringify(userObj), header)
      .then(() => {
        window.location.reload();
      })
      .then(function(response) {
        return;
      })

      .catch(function(error) {
        console.log(error);
      });
  };
  inputChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className={styles.formWrapper}>
        <Container className={styles.center} component="main" maxWidth="xs">
          <div>
            <Avatar className={styles.icon}>{/* <LockOutlinedIcon /> */}</Avatar>
            <Typography component="h1" variant="h5">
              服務表單
            </Typography>
            <p className="form-remind">*為必填項目</p>
            <form onSubmit={this.submitHandler}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField onChange={this.inputChangeHandler} name="name" variant="outlined" required fullWidth id="name" label="姓名" />
                </Grid>

                <Grid item xs={6}>
                  <TextField onChange={this.inputChangeHandler} variant="outlined" required fullWidth name="phone" label="聯絡電話" id="phone" />
                </Grid>

                <Grid item xs={12}>
                  <TextField select onChange={this.inputChangeHandler} variant="outlined" required fullWidth id="period" label="平日/假日" name="period">
                    {period.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField select onChange={this.inputChangeHandler} variant="outlined" required fullWidth id="hour" label="方便聯絡時間" name="hour">
                    {time.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField type="email" onChange={this.inputChangeHandler} variant="outlined" fullWidth id="email" label="Email" name="email" />
                </Grid>

                <Grid item xs={12}></Grid>
              </Grid>
              <Button disabled={this.state.submitted} type="submit" fullWidth variant="contained" className="button button-primary button-wide-mobile button-sm">
                請聯絡我
              </Button>
              <Grid container justify="flex-end"></Grid>
            </form>

            <p className={this.state.submitted ? `${styles.show}` : `${styles.hidden}`}>表單傳送完成，我們將會儘速聯絡您！</p>
          </div>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit"></Link>{" "}
            </Typography>
          </Box>
        </Container>
      </div>
    );
  }
}

export default SignUp;
