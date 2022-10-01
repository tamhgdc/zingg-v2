import {
  ADD_BANNER,
  ADD_NEW_DAY,
  ADD_NEW_RELEASE,
  ADD_FAV_ARTIST,
  ADD_NEW_SONGS_EVERY_DAY,
  ADD_WEEKCHART,
  ADD_TOP100,
  ADD_NEW_SONGS,
  ADD_ALBUMS,
  ADD_XONE_CORNER,
  ADD_EVENTS,
  ADD_ALL,
} from './actions';

const reducer = (state, action) => {
  let newState = {};
  switch (action.type) {
    case ADD_BANNER:
      newState = { ...state, banner: action.payload };
      return newState;
    case ADD_NEW_DAY:
      newState = { ...state, newDay: action.payload };
      return newState;
    case ADD_NEW_RELEASE:
      newState = { ...state, newRelease: action.payload };
      return newState;
    case ADD_FAV_ARTIST:
      newState = { ...state, favoriteArtist: action.payload };
      return newState;
    case ADD_NEW_SONGS_EVERY_DAY:
      newState = { ...state, newSongsEveryDay: action.payload };
      return newState;
    case ADD_WEEKCHART:
      newState = { ...state, weekChart: action.payload };
      return newState;
    case ADD_TOP100:
      newState = { ...state, top100: action.payload };
      return newState;
    case ADD_NEW_SONGS:
      newState = { ...state, newSongs: action.payload };
      return newState;
    case ADD_ALBUMS:
      newState = { ...state, albums: action.payload };
      return newState;
    case ADD_XONE_CORNER:
      newState = { ...state, xoneCorner: action.payload };
      return newState;
    case ADD_EVENTS:
      newState = { ...state, events: action.payload };
      return newState;
    case ADD_ALL:
      newState = { ...state, ...action.payload };
      return newState;
    default:
      break;
  }
};

export default reducer;
