export let DATA = [
  {
    id: 1,
    title: "Tesla Model S",
    seller: "Tesla Motors",
    sellerThumbnail:
      "https://1000logos.net/wp-content/uploads/2018/02/Tesla-logo.png",
    itemImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-s-1563301327.jpg",
  },
  {
    id: 2,
    title: "Honda Insight 2019",
    seller: "Honda Cars",
    sellerThumbnail:
      "https://1.bp.blogspot.com/-7GQn-HajJak/VDr02lE4O2I/AAAAAAAABI4/pz4ozV6z8j0/s1600/Honda%2BLogo%2B3.jpg",
    itemImage:
      "https://images.hgmsites.net/hug/2019-honda-insight_100655365_h.jpg",
  },
  {
    id: 3,
    title: "Tesla Model S",
    seller: "Tesla Motors",
    sellerThumbnail:
      "https://1000logos.net/wp-content/uploads/2018/02/Tesla-logo.png",
    itemImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-s-1563301327.jpg",
  },
];

export const addListing = (obj) => {
  DATA = [...DATA, obj];
};
