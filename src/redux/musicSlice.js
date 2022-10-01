import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    playlistInQueue: [],
    currentIndex: 0,
    currentSong: null,
    srcCurrentSong: null,
    nextSong: null,
    prevSong: null,
    recentSongs: [],
  },
  reducers: {
    setPlaylistInQueue: (state, action) => {
      state.playlistInQueue = action.payload;
    },
    setCurrentSong: (state, action) => {
      state.currentIndex = action.payload;
      state.currentSong = state.playlistInQueue[state.currentIndex];
      state.recentSongs = [state.currentSong, ...state.recentSongs];
    },
    setSrcCurrentSong: (state, action) => {
      state.srcCurrentSong = action.payload;
    },
    nextSong: (state, action) => {
      //action.payload --> isShuffle
      if (action.payload) {
        //if song is vip --> random one more time
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * state.playlistInQueue.length);
        } while (!state.playlistInQueue[randomIndex].isWorldWide);
        state.currentSong = state.playlistInQueue[randomIndex];
      } else {
        state.currentIndex++;

        //if song is vip --> next one till can play
        while (!state.playlistInQueue[state.currentIndex].isWorldWide) {
          state.currentIndex++;
        }
        state.currentSong = state.playlistInQueue[state.currentIndex];
      }
    },
    prevSong: (state) => {
      if (state.currentIndex === 0) {
        state.currentIndex = state.playlistInQueue.length - 1;
      } else {
        state.currentIndex--;
      }

      //if song is vip --> prev one till can play
      while (!state.playlistInQueue[state.currentIndex].isWorldWide) {
        state.currentIndex--;
      }
      state.currentSong = state.playlistInQueue[state.currentIndex];
    },
  },
});

export { musicSlice };
export const { setCurrentSong, setPlaylistInQueue, nextSong, prevSong, setSrcCurrentSong } =
  musicSlice.actions;
export default musicSlice.reducer;
