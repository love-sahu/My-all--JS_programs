let juicetype = prompt("konsa juice tumhe chaiye");
let kitniglass = prompt("kitne glass chaiye");

function juice(juice, glass) {
  let paise = prompt(
    "give me " +
      glass * 20 +
      " rupies for " +
      glass +
      " glassn of " +
      juice +
      " juice "
  );
  let collectjuice = "ye lijiye apna " + juice + " juice " + glass + " glass";

  return collectjuice;
}
let juice4 = juice(juicetype, kitniglass);
alert(juice4);
