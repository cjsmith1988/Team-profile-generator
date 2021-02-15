
  const generateEmployeeCard = EmployeeArr => {
      return `
      <section class="" id="team-cards">
        ${EmployeeArr
            .map(({ name, id, email, officeNumber }) => {
            return `
            <div class="card">
              <h3 class="card-header">${name}</h3>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${id}</li>
                    <li class="list-group-item">${email}</li>
                    <li class="list-group-item">${officeNumber}</li>
                </ul>
              </div>
            </div>
          `;
          })
          .join('')}
      </section>
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
  