let ls = [
  {
    index: 0,
    bullets: [
      { index: 0, text: "a" },
      { index: 1, text: "b" },
    ],
  },
  {
    index: 1,
    bullets: [
      { index: 0, text: "a" },
      { index: 1, text: "b" },
    ],
  },
];

let newBs = ls.map((obj) => {
  return obj.bullets.map((bullet) => {
    return bullet.text;
  });
});

let newLs = ls.map((obj, index) => {
  var temp = Object.assign({}, obj);
  temp.bullets = newBs[index];
  return temp;
});
