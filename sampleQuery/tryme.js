//** get a user details */

{
  user(id: "40") {
    firstName
    id
    age
    company {
      name
    }
  }
}

//**  get a company details */

{
  company(id: "1") {
    name
    description
  }
}

//** get a list of users at given company */

{
  company(id: "1") {
      name
    description,
    users{
      id,
      firstName,
      age
    }
  }
}

//** add a new user */

mutation {
  addUser(firstName: "Pat", age: 39, companyId: "1") {
    id
  }
}

//** edit an exsisting user */
mutation {
  editUser(id: "g9hF2ue", firstName: "Bar" ) {
    id
    firstName
    age
    company {
      name
    }
  }
}

//** delete an existing user */
mutation {
  deleteUser(id: "hVuTeNd") {
    id
    firstName
    age
    company {
      name
    }
  }
}
