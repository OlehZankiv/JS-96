/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5, // 1 - 5
  tracks: ["track-1", "track-2", "track-3"],
  
  changeName(newName) {
    if (newName.length > 4) {
      this.name = newName;
    }
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  removeTrack(track) {
    const index = this.tracks.indexOf(track);
    
    if (index === -1) {
      console.warn("There are no track with name: " + track);
      return;
    }

    const leftSide = this.tracks.slice(0, index);
    const rightSide = this.tracks.slice(index + 1);

    const slicedTracks = leftSide.concat(rightSide);

    this.tracks = slicedTracks;
  },
  updateRating(newRating) {
    if (newRating < 1 || newRating > 5) {
      console.error("Wrong rating value, you can use from 1 to 5")
      return;
    }

    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// [1,2,3,4,5] => [1,2,3,4,5].slice(0, 2) [1,2] => [1,2,3,4,5].slice(3) [4,5] => [1,2].concat([4,5]) => [1,2,4,5]

// console.log(playlist.getTrackCount());

// playlist.changeName("New playlist name");

// console.log(playlist);

playlist.addTrack("new track 1");
// console.log(playlist);

playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

// playlist.updateRating(123123);
// console.log(playlist);

playlist.removeTrack("new track 1");
console.log(playlist.tracks);
