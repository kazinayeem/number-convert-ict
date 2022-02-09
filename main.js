const input = document.getElementById("decnumber").value;
const output = document.getElementById("span");
const spanoctal = document.getElementById("spanoctal");
const hexoctal = document.getElementById("hexoctal");
const spanbinary = document.getElementById("spanbinary");
const Hexadecimalnumbertext = document.getElementById("Hexadecimalnumbertext");
const octaltodectext = document.getElementById("octaltodectext");

document.getElementById("btndec").addEventListener("click", function () {
  const data = document.getElementById("decnumber").value;

  const convert = parseInt(data).toString(2);
  output.innerText = convert;
});

document.getElementById("btnoctal").addEventListener("click", function () {
  const data = document.getElementById("octalnumber").value;

  const convert = parseInt(data).toString(8);
  spanoctal.innerText = convert;
});

document.getElementById("hexbtn").addEventListener("click", function () {
  const data = document.getElementById("hexnumber").value;

  const convert = parseInt(data).toString(16);
  hexoctal.innerText = convert;
});

document.getElementById("btnbinary").addEventListener("click", function () {
  const data = document.getElementById("binarynum").value;
  const convert = parseInt(data, 2);
  spanbinary.innerText = convert;
});

document.getElementById("octaltodecbtn").addEventListener("click", function () {
  const data = document.getElementById("octaltodec").value;
  const convert = parseInt(data, 8);
  octaltodectext.innerText = convert;
});
document.getElementById("Hexadecimalnumberbtn").addEventListener("click", function () {
  const data = document.getElementById("Hexadecimalnumber").value;
  const convert = parseInt(data, 16);
  Hexadecimalnumbertext.innerText = convert;
});
