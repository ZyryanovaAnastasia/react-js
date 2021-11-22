import { makeStyles } from "@mui/styles";

export const barStyle = makeStyles((context) => ({
  barWrapper: {
    width: "100%",
    backgroundColor: `${context.palette.primary.main}`,
    color: "white",
    margin: '0 0 20px 0',
  },
}));
