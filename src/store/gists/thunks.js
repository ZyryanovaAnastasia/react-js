import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

export const getGists =
  (page = 1) =>
  async (dispatch, _, api) => {
    try {
      dispatch(getGistsStart());
      
      const { data } = await api.getGistsApi(page);
      console.log(data);

      dispatch(getGistsSuccess(data));
    } catch (e) {
      dispatch(getGistsError(e));
    }
  };
