const reviews = [
    {
      id: 1,
      name: "Ahmad Ali",
      job: "Manager",
      img:
        "https://welayer.se/komvux/Vanilla/Vanilla-JavaScript-Course/Reviews/img/img1.png",
      text:
        "Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1",
    },
    {
      id: 2,
      name: "Sara Husam",
      job: "Webdevelopmer",
      img:
      "https://welayer.se/komvux/Vanilla/Vanilla-JavaScript-Course/Reviews/img/img1.png",
      text:
        "Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2",
    },
    {
      id: 3,
      name: "Peter johansson",
      job: "Counter",
      img:
      "https://welayer.se/komvux/Vanilla/Vanilla-JavaScript-Course/Reviews/img/img1.png",
      text:
        "Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 ",
    },
    {
      id: 4,
      name: "Magnus Lernger",
      job: "CHef",
      img:
      "https://welayer.se/komvux/Vanilla/Vanilla-JavaScript-Course/Reviews/img/img1.png",
      text:
        "Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 ",
    },
  ];
  // select 
  const img = document.getElementById("Pimg");
  const author = document.getElementById("Pname");
  const job = document.getElementById("Pjob");
  const info = document.getElementById("Pinfo");
  
  const prevBtn = document.querySelector(".btn-back");
  const nextBtn = document.querySelector(".btn-next");
  const randomBtn = document.querySelector(".btn-surprise");
  
  // Starting  //
  let currentItem = 0;
  
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show Review //
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // Btnm Next //
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // BTn back //
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // Random //
  randomBtn.addEventListener("click", function () {
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });