
  const generateEmployeeCard = EmployeeArr => {
      return `
      <div class="card-deck container-fluid mt-4" id="team-cards">
            <div class="row justify-content-center">
                ${EmployeeArr
                    .map(({ name, id, email, officeNumber, github, school, constructor }) => {
                        if (!officeNumber){officeNumber = ''};
                        if (!github){github = ''};
                        if (!school){school = ''};
                        const role = constructor.name;
                        switch (role) {
                            case 'Manager':
                              icon = '<i class="ri-user-2-line"></i>';
                              uniqueCriteria = `Office Number: <br>${officeNumber}`;
                              break;
                            case 'Engineer':
                                icon = '<i class="ri-ruler-2-line"></i>';
                                uniqueCriteria = `GitHub: <br><a href="https://github.com/${github}">${github}</a>`;
                                break;
                            case 'Intern':
                                icon = '<i class="ri-building-3-fill"></i>';
                                uniqueCriteria = `School: <br>${school}`;
                                break;
                            default:
                              text = '';
                              uniqueCriteria = '';
                          }

                    return `
                    <div class="col-auto mb-3">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header bg-primary">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-subtitle">${icon} ${role}</h6>
                            </div>
                            <div class="card-body">
                                <div class="card-text"
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${id}</li>
                                        <li class="list-group-item">Email: <br><a href="mailto:${email}">${email}</a></li>
                                        <li class="list-group-item">${uniqueCriteria}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                })
                .join('')}
            </div
      </div>
    `;
  };
  module.exports = templateData => {
    //console.log(templateData);
  
    // destructure page data by section
    //const { projects, about, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team View</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center">
          <h1 class="page-title">My Team</h1>
        </div>
      </header>
      <main class="container">
        ${generateEmployeeCard(templateData)}
      </main>
    </body>
    </html>
    `;
  };
  