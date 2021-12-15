import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Input } from "@mui/material";
import { gistSelector, searchGistsByUserName } from "../../store/gists";

const InputSearch = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const search = ({ code }) => {
    if (code === "Enter") {
      dispatch(searchGistsByUserName(searchText));
      setSearchText("");
    }
  };
  const handleChangeValue = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Input
      value={searchText}
      onChange={handleChangeValue}
      onKeyPress={search}
    />
  );
};

export const ListGistsBySearch = () => {
  const { gistsSearch, gistsLoadingSearch, gistsErrorSearch } =
    useSelector(gistSelector);

  if (gistsErrorSearch) {
    return (
      <div>
        <h2>gistsError</h2>
        <InputSearch />
      </div>
    );
  }

  return (
    <div>
      <InputSearch />
      {gistsLoadingSearch ? (
        <CircularProgress />
      ) : (
        <ul>
          <h4>Результат поиска</h4>
          <div>
            {gistsSearch.map((gist, index) => (
              <li key={index}>
                <a href={`${gist.url}`}>{`${gist.url}`}</a>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};
