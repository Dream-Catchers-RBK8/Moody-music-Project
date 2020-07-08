// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import ProductPageHeader from "./homePageheader";
// import AudiotrackIcon from "@material-ui/icons/Audiotrack";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

// import { makeStyles } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";
// import SvgIcon from "@material-ui/core/SvgIcon";

// const styles = (theme) => ({
//   root: {
//     display: "flex",
//     backgroundColor: theme.palette.secondary.light,
//     overflow: "hidden",
//   },
//   container: {
//     marginTop: theme.spacing(10),
//     marginBottom: theme.spacing(15),
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   item: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: theme.spacing(0, 5),
//   },
//   ques: {
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(5),
//     position: "relative",
//     backgroundColor: theme.palette.secondary.light,
//     overflow: "hidden",

//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     fontSize: 24,
//     fontFamily: theme.typography.fontFamily,
//     fontWeight: theme.typography.fontWeightMedium,
//   },

//   title: {
//     display: "flex",

//     marginBottom: theme.spacing(14),
//   },
//   number: {
//     fontSize: 24,
//     fontFamily: theme.typography.fontFamily,
//     color: theme.palette.secondary.main,
//     fontWeight: theme.typography.fontWeightbold,
//   },
//   image: {
//     height: 55,
//     marginTop: theme.spacing(4),
//     marginBottom: theme.spacing(4),
//   },
//   curvyLines: {
//     pointerEvents: "none",
//     position: "absolute",
//     top: -180,
//     opacity: 0.7,
//   },
//   button: {
//     marginTop: theme.spacing(8),
//   },
// });

// function ProductHowItWorks(props) {
//   const { classes } = props;

//   const [value, setValue] = React.useState({
//     0: "",
//     50: "",
//     100: "",
//   });

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const guess = () => {
//     if (document.getElementById("zero").checked) {
//       window.location = "/sad";
//     }

//     if (document.getElementById("one").checked) {
//       window.location = "/tarab";
//     }

//     if (document.getElementById("two").checked) {
//       window.location = "/happy";
//     }
//   };

//   // console.log(document.getElementById(#fa).value)
//   return (
//     <section className={classes.root}>
//       <Container className={classes.container}>
//         <img
//           src="/static/themes/onepirate/productCurvyLines.png"
//           className={classes.curvyLines}
//           alt="curvy lines"
//         />
//         <Typography
//           variant="h4"
//           marked="center"
//           className={classes.title}
//           component="h2"
//         >
//           Guess my mood?
//         </Typography>
//         <div>
//           <Grid container spacing={5}>
//             <Grid item xs={12} md={4}></Grid>
//             <Grid item xs={12} md={4}>
//               <div className={classes.item}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="100"
//                   height="100"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
//                 </svg>
//                 <div>
//                   {" "}
//                   <FormControl component="fieldset">
//                     <FormLabel
//                       className={classes.ques}
//                       variant="h1"
//                       component="h2"
//                     >
//                       How much do you feel happy at this moment?
//                     </FormLabel>
//                     <RadioGroup
//                       aria-label="happy"
//                       name="happy"
//                       value={value}
//                       onChange={handleChange}
//                     >
//                       <FormControlLabel
//                         id="zero"
//                         value="0"
//                         control={<Radio />}
//                         label="0%"
//                       />
//                       <FormControlLabel
//                         id="one"
//                         value="50"
//                         control={<Radio />}
//                         label="50%"
//                       />
//                       <FormControlLabel
//                         id="two"
//                         value="100"
//                         control={<Radio />}
//                         label="100%"
//                       />
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//               </div>
//             </Grid>
//           </Grid>
//         </div>
//         <Button
//           onClick={guess}
//           color="secondary"
//           size="large"
//           variant="contained"
//           className={classes.button}
//           component="a"
//         >
//           Guess
//         </Button>
//       </Container>
//     </section>
//   );
// }

// ProductHowItWorks.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ProductHowItWorks);
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "./Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: "hsla(0, 100%, 70%, 0.1)",
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  ques: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    position: "relative",
    overflow: "hidden",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 18,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.light,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const guess = () => {
    if (value == 0) {
      window.location = "/sad";
      //alert(value)
    }

    if (value == 50) {
      window.location = "/tarab";
    }

    if (value == 100) {
      window.location = "/happy";
    }
    if (value == 1) {
      window.location = "/workout";
    }
    if (value == 2) {
      window.location = "/calm";
    }
    if (value == 3) {
      window.location = "/romantic";
    }
    if (value == 4) {
      window.location = "/sarcastic";
    }
    //alert(value)
  };

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="https://raw.githubusercontent.com/mui-org/material-ui/master/docs/public/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Answer one of these question to guess your mood
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src="https://bit.ly/2VXAGhM"
                  alt="suitcase"
                  className={classes.image}
                />
                <FormControl component="fieldset">
                  <FormLabel
                    className={classes.ques}
                    variant="h1"
                    component="h2"
                  >
                    How much do you feel happy at this moment?
                  </FormLabel>
                  <RadioGroup
                    id="options"
                    aria-label="happy"
                    name="happy"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      id="zero"
                      value="0"
                      control={<Radio />}
                      label="0%"
                    />
                    <FormControlLabel
                      id="one"
                      value="50"
                      control={<Radio />}
                      label="50%"
                    />
                    <FormControlLabel
                      id="two"
                      value="100"
                      control={<Radio />}
                      label="100%"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src="https://bit.ly/3gEy9RS"
                  alt="graph"
                  className={classes.image}
                />
                <FormControl component="fieldset">
                  <FormLabel
                    className={classes.ques}
                    variant="h1"
                    component="h2"
                  >
                    Are enjoying drive with your friend?
                  </FormLabel>
                  <RadioGroup
                    id="options"
                    aria-label="happy"
                    name="happy"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      id="zero"
                      value="1"
                      control={<Radio />}
                      label="YES"
                    />
                    <FormControlLabel
                      id="one"
                      value="2"
                      control={<Radio />}
                      label="NO"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                  alt="clock"
                  className={classes.image}
                />
                <FormControl component="fieldset">
                  <FormLabel
                    className={classes.ques}
                    variant="h1"
                    component="h2"
                  >
                    Feeling grateful?
                  </FormLabel>
                  <RadioGroup
                    id="options"
                    aria-label="happy"
                    name="happy"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      id="zero"
                      value="3"
                      control={<Radio />}
                      label="YES"
                    />
                    <FormControlLabel
                      id="one"
                      value="4"
                      control={<Radio />}
                      label="NO"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          onClick={guess}
        >
          GUESS
        </Button>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
