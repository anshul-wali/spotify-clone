export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //remove after developing
  // token : "BQB9PFlXB_hxVYksu5h9RzWPfa2H66a8pzIntw59Fa9uIO8ANhuuidk629LvJ9CGsON5OmMtb2bZO4FqFtrZoZuD4dZVf7E34NL-wjmVXXWEG4hCycIR-DTQh9BlKbiOHKV4gDe_1UY2Ij1aFuqLtiZyQzP1b_blXD_RDu_UzRoENDkOKTHu"
};

const reducer = (state, action) => {
  console.log(action);

  // Action = type , [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
