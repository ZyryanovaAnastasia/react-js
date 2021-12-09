import * as React from "react";
import { ListGists, ListGistsBySearch } from "../components";

export function Gists() {
  return (
    <div>
      <h1>Gists</h1>
      {/* <ListGists /> */}
      <ListGistsBySearch />
    </div>
  );
}
