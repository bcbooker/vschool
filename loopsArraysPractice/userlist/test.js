let users = [
    {
      name: "Sophie",
      age: 12
    },
    {
      name: "Larry",
      age: 32
    },
    {
      name: "Cathy",
      age: 40
    }
  ]

  for(i = 0; i < users.length; i++) {
      users[i].isAdmin = true
  }
  console.log(users)