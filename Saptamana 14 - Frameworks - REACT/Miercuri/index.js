const localJson = fetch("./file.json").then(response => response.json());

(function() {
  const body = document.querySelector(".content");
  const star = `<i class="fas fa-star"></i>`;
console.log(star);
  const cont = localJson.then(y =>
    y.map(
      x =>
        `<div class="box">
            <div class ="contentBox">
                <div class="imgBox">
                    <img src="${x.photo}">
                </div>
                <div class="description">
                    <p>${x.type} in ${x.city}</p>
                    <h2>${x.title}</h2>
                    
    <span>${star.repeat(x.star)} ${x.nrReview} *${x.host}</span>
                </div>
            </div>
        </div>`
    )
  );
  cont.then(x => (body.innerHTML = x.join("")));
})();
