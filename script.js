window.addEventListener("load", function () {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const div = document.getElementById("container");
            json.sort(function (a, b) { return a.hoursInSpace - b.hoursInSpace });
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                <div class="astronaut">
       <div class="bio">
          <h3>${json[i].firstName} ${json[i].lastName}</h3>
          <ul>
             <li>Hours in space: ${json[i].hoursInSpace}</li>
             <li id = ${json[i].id}>Active: ${json[i].active}</li>
             <li>Skills: ${json[i].skills}</li>
          </ul>
       </div>
       <img class="avatar" src=${json[i].picture}>
    </div>
    `;
                if (json[i].active === true) {
                    let active = document.getElementById(json[i].id);
                    active.style.color = "green";
                }
            }
            div.innerHTML += `
            <h2> Total number of astronauts: ${json.length}</h2>
            `
        });
    });
});