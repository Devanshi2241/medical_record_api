# medical_reocrd_api

This api contains signup,login,adding medical records,searching records and logout <br>

1)  Signup <br>
    path - localhost:3500/user/signup
    Provide Information: 
   {
    "firstname":"firstname",
    "lastname":"lastname",
    "email":"email",
    "password":"password"
    }

2) Login <br>
    path - localhost:3500/user/login
    {
      "email":"email",
      "password":"password"
    }
    
 3) Add medical record
    path - localhost:3500/record/:userid/addrecord
    {
    nameOfDisease:"DiseaseName",
    "from":"yyyy/mm/dd",
    "to":"yyyy/mm/dd",
    "Notes":"Additional Notes"
    }
    
 4) Find Medical record by name of disease
    path - localhost:3500/record/:userid/name
    {
       nameOfDisease:"DiseaseName"
    }
    
 5) Find Medical record by date range
  path - localhost:3500/record/:userid/range
  {
      "from":"yyyy/mm/dd",
      "to":"yyyy/mm/dd"
  }

 6) Logout
    path - localhost:3500/user/:userid/logout
