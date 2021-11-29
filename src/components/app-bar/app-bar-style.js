import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((context) => {
  console.log(context)
  return {
    barWrapper: {
      width: "100%",
      backgroundColor: `${context.palette.primary.main}`,
      margin: "0 0 20px 0",
      "& *": {
        color: "white",
        fill: "white",
      },
    },
  };
});
