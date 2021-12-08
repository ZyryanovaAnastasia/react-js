import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
  Box,
  Pagination,
} from "@mui/material";
import { getGists, gistSelector } from "../../store/gists";
import { useStyles } from "./use-style";

export const ListGists = () => {
  const styles = useStyles();
  const { gists, gistsLoading, gistsError } = useSelector(gistSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  if (gistsError) {
    return <h2>gistsError</h2>;
  }

  return (
    <div>
      {gistsLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.container}>
          {gists.map((gist, index) => {
            return (
              <ListItem key={index} className={styles.item}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt={"Avatar"} src={`${gist.owner.avatar_url}`} />
                  </ListItemAvatar>
                  <ListItemText primary={`${gist.owner.login}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </div>
      )}

      <Pagination
        count={5}
        variant="outlined"
        onChange={(e, page) => dispatch(getGists(page))}
        hideNextButton={true}
        hidePrevButton={true}
        color="primary"
        className={styles.pagination}
      />
    </div>
  );
};
