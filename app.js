// fetch("https://jsonplaceholder.typicode.com/albums").then((res) => {
//   return res.json();
// });
///yoki

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((val) => {
      let div = document.createElement("div");

      document.body.append(div);
      div.classList.add("container");
      let h1 = document.createElement("h1");

      let h2 = document.createElement("h2");

      let span = document.createElement("span");

      span.classList.add("container2");
      let img = document.createElement("img");

      let link = document.createElement("a");

      link.classList.toggle("container1");

      div.append(h1, h2, span, link, img);

      console.log(val.albumId);
      console.log(val.id);
      console.log(val.title);
      console.log(val.url);
      console.log(val.thumbnailUrl);

      h1.innerHTML = `albumId:${val.albumId}`;
      h2.innerHTML = `id:${val.id}`;

      span.innerHTML = `<h3>title:${val.title}</h3>`;

      link.innerHTML = `<a href="${val.thumbnailUrl}">${val.thumbnailUrl}</a>`;
      img.src = val.url;
      img.style.width = "350px";
      img.style.height = "250px";
    });
  })

  .catch((error) => {
    console.log(error);
  });
