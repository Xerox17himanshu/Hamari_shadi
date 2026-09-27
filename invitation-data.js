/*
 * Edit this file to personalize the invitation. Keep the keys as they are.
 * Photo paths are relative to index.html, for example: "photos/meenal-avinash.jpg".
 * Put an audio file beside index.html (or in a folder) and set musicSrc to its path.
 */
window.invitationData = {
  bride: "Nikita",
  groom: "Himanshu",
  weddingDate: "2026-12-03T16:00:00+05:30",
  dateLabel: "December 3, 2026",
  invitationLine: "With the blessings of our families, we joyfully invite you to celebrate the union of",
  familyLine: "Together with their families",
  familyBlessing: "and all the love in the world",

  venue: {
    name: "OM GRAAND KESHAV",
    address: "near, new, Bhojla, Jhansi, Uttar Pradesh 284002",
    mapsUrl: "https://share.google/pv8s7w6JjwwIJgNfI",
    photo: ""
  },

  photos: [
    { src: "photos/image1.jpeg", caption: "A moment to remember · 01", alt: "Wedding photo 1" },
    { src: "photos/image2.jpeg", caption: "A moment to remember · 02", alt: "Wedding photo 2" },
    { src: "photos/image3.jpeg", caption: "A moment to remember · 03", alt: "Wedding photo 3" },
    { src: "photos/image4.jpeg", caption: "A moment to remember · 04", alt: "Wedding photo 4" },
    { src: "photos/image5.jpeg", caption: "A moment to remember · 05", alt: "Wedding photo 5" },
    { src: "photos/image7.jpeg", caption: "A moment to remember · 07", alt: "Wedding photo 7" },
    { src: "photos/image8.jpeg", caption: "A moment to remember · 08", alt: "Wedding photo 8" },
    { src: "photos/image9.jpeg", caption: "A moment to remember · 09", alt: "Wedding photo 9" }
  ],

  events: [
    { name: "Engagement", photo: "photos/festival/engagement.jpg" },
    { name: "Haldi", photo: "photos/festival/haldi.jpg" },
    { name: "Journey", photo: "photos/festival/Journey.png" },
    { name: "Wedding", photo: "photos/festival/wedding.jpg" }
  ],
  /* Example: { name: "Sangeet Night", date: "June 29", time: "7:00 PM", description: "An evening of music and dancing", dressCode: "Maroon · Gold · Cream", photo: "photos/sangeet.jpg", mapsUrl: "" } */

  /* Add track objects for the RSVP song suggestions. */
  songs: [],
  /* Example: { title: "Song title", artist: "Artist name" } */

  /* Optional. Example: "music/wedding-instrumental.mp3" */
  musicSrc: ""
};
