let data = [
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
  {
    name: "Matero",
    age: "30",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return (
    "<div>" + item.name + " " + "is " + item.age + " years old." + "</div>"
  );
});

info.innerHTML = details.join("\n");
