const dataArry = [
    {
        "c_num": "112233",
        "c_Name": "Ralph",
        "phone": "555-55-555",
        "email": "email.1@gmail.com",
        "Client": "Make em dance llc "
    },
    {
        "c_num": "/223344",
        "c_Name": "George",
        "phone": "555-54-665",
        "email": "email.2@gmail.com",
        "Client": "Foolish Boy Ent"
    }, {
        "c_num": "334455",
        "c_Name": "Quin",
        "phone": "702-55-2020",
        "email": "email.3@gmail.com",
        "Client": "MemphisGriz"
    },   {
        "c_num": "445566",
        "c_Name": "Jake",
        "phone": "111-44-9090",
        "email": "email.4@gmail.com",
        "Client": "Ducky LLC"
    },
    {
        "c_num": "556677",
        "c_Name": "Hova",
        "phone": "504-59-000",
        "email": "email.5@gmail.com",
        "Client": "Parmount"
    }, {
        "c_num": "667788",
        "c_Name": "Sidney",
        "phone": "303-75-444",
        "email": "email.6@gmail.com",
        "Client": "Walt Disney"
    }
]
const guild = [
    {
      "id": 1,
      "code": "SAG",
      "description": "Screen Actors Guild"
    },
    {
      "id": 2,
      "code": "AFTRA",
      "description": "American Federation of Television and Radio Artists"
    },
    {
      "id": 3,
      "code": "WGA",
      "description": "Writer's Guild of America"
    },
    {
      "id": 4,
      "code": "DGA",
      "description": "Director's Guild of America"
    },
    {
      "id": 5,
      "code": "AFM",
      "description": "American Federation of Musicians"
    },
    {
      "id": 6,
      "code": "IATSE",
      "description": " International Alliance of Theatrical Stage Employees, Moving Picture Technicians, Artists and Allied Crafts of the United States, Its Territories and Canada"
    },
    {
      "id": 7,
      "code": "test",
      "description": "Test"
    }
  ]
export const Read =()=>{
    
return dataArry

}
export const Write =(client)=>{
dataArry.push(client)
}

// export const fetchAllGuild =(url)=>{
//     return new Promise((resolve,reject)=>{
//         if(guild){
//             resolve(guild)

//         }else{
//             reject("no guild data ")
//         }
//     })
// }