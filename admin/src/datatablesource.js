export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  
];

export const hotelColumns = [
  {field:"_id", "headername": "ID", width: 250},
  {
    field: "name",
    headername: "Name",
    width: 150,
  },
  {
    field: "type",
    headername: "Type",
    width: 100,
  },
  {
    field: "title",
    headername: "Title",
    width: 100,
  },
  {
    field: "city",
    headername: "City",
    width: 100,
  },
]


export const roomColumns = [
  {field:"_id", "headername": "ID", width: 70},
  {
    field: "title",
    headername: "Title",
    width: 230,
  },
  {
    field: "desc",
    headername: "Description",
    width: 200, 
  },
  {
    field: "price",
    headername: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headername: "Max People",
    width: 100,
  },
]
//temporary data

