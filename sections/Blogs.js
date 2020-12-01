import React from "react";
import Card from "../components/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  blogWrapper: {
  },
  blogTitle: {
      textAlign: 'center',
      marginTop: '2em',

  }
});

const Blogs = () => {
  const classes = useStyles();
  return (
    <div className={classes.blogWrapper}>
        <h2 className={classes.blogTitle}>部落格</h2>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Blogs;
