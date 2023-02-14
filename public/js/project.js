let project = [];

function addProject() {
  let title = document.getElementById("name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("description").value;
  let t1 = document.getElementById("node-js").checked;
  let t2 = document.getElementById("javascript").checked;
  let t3 = document.getElementById("react-js").checked;
  let t4 = document.getElementById("python").checked;
  let image = document.getElementById("inputImageProject").files;

  let icon1 = t1 == true ? '<i class="fab fa-node-js"></i>' : "";
  let icon2 = t2 == true ? '<i class="fab fa-js-square"></i>' : "";
  let icon3 = t3 == true ? '<i class="fa-brands fa-react"></i>' : "";
  let icon4 = t4 == true ? '<i class="fa-brands fa-python"></i>' : "";

  if (title == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your project name",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (startDate == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your project start date",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (endDate == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your project end date",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (description == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please enter your project description",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (
    icon1 == false &&
    icon2 == false &&
    icon3 == false &&
    icon4 == false
  ) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please select at least one project type",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (image.length == 0) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please upload your project image",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    image = URL.createObjectURL(image[0]);

    let icon = [icon1, icon2, icon3, icon4];
    console.log(icon);

    let iconFil = icon.filter((elem) => elem[1]).reverse();
    console.log(iconFil);

    let dataBlog = {
      image,
      title,
      description,
      iconFil,
      startDate,
      endDate,
    };

    project.push(dataBlog);
    console.log(project);

    showProject();
  }
}

function showProject() {
  document.getElementById("project-card").innerHTML = "";
  for (let i = 0; i < project.length; i++) {
    if (project[i].iconFil[0] == undefined) {
      project[i].iconFil[0] = "";
    }
    if (project[i].iconFil[1] == undefined) {
      project[i].iconFil[1] = "";
    }
    if (project[i].iconFil[2] == undefined) {
      project[i].iconFil[2] = "";
    }
    if (project[i].iconFil[3] == undefined) {
      project[i].iconFil[3] = "";
    }
    if (project[i].iconFil[4] == undefined) {
      project[i].iconFil[4] = "";
    }

    document.getElementById(
      "project-card"
    ).innerHTML += `<div class="project" id="project-card">
        <div class="project-card" id="project-card">
            <div class="project-image">
                <img src="${project[i].image}" alt="">
            </div>
            <div class="project-content">
                <a href="detail-project.html" class="title-project">${project[i].title}</a>
                <p class="duration-project">Duration : ${getDuration(project[i].startDate, project[i].endDate)}</p>
                <p class="descrition-project">${project[i].description}
                </p>
                <div class="icon-tech">
                    <div class="item-icon-tech">
                    ${project[i].iconFil[0]}
                    </div>
                    <div class="item-icon-tech">
                    ${project[i].iconFil[1]}
                    </div>
                    <div class="item-icon-tech">
                    ${project[i].iconFil[2]}
                    </div>
                    <div class="item-icon-tech">
                    ${project[i].iconFil[3]}
                    </div>
                </div>
                <div class="action">
                    <a href="#" class="edit-action">EDIT</a>
                    <a href="#" class="delete-action">DELETE</a>
                </div>
            </div>
        </div>
    </div>`;
  }

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Project has been added",
    showConfirmButton: false,
    timer: 1500,
  });
}

function getDuration(start, end) {
  let dateStart = new Date(start)
  let dateEnd = new Date(end)

  let distance = dateEnd - dateStart

  let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
  if (monthDistance != 0) {
      return monthDistance + ' month'
  } else {
      let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
      if (weekDistance != 0) {
          return weekDistance + ' weeks'
      } else {
          let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
          if (daysDistance != 0) {
              return daysDistance + ' Days Ago'
          } else {
              let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
              if (hoursDistance != 0) {
                  return hoursDistance + ' Hours Ago'
              } else {
                  let minuteDistance = Math.floor(distance / (60 * 1000))
                  if (minuteDistance != 0) {
                      return minuteDistance + ' Minutes Ago'
                  } else {
                      let secondDistance = Math.floor(distance / 1000)
                      if (secondDistance != 0)
                          return secondDistance + ' sec'
                  }
              }
          }
      }
  }
}
