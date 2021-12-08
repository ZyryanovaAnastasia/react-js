import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
  item: {
    width: "300px !important",
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
