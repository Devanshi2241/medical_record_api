# medical_reocrd_api

This api is developed using Node js, express js <br>

This api contains signup,login,adding medical records,searching records and logout <br>

1)  Signup <br>
    path - localhost:3500/user/signup <br>
    Provide Information: <br>
   {<br>
    "firstname":"firstname",<br>
    "lastname":"lastname",<br>
    "email":"email",<br>
    "password":"password"<br>
    }<br>

2) Login <br>
    path - localhost:3500/user/login<br>
    {<br>
      "email":"email",<br>
      "password":"password"<br>
    }<br>
    
 3) Add medical record<br>
    path - localhost:3500/record/:userid/addrecord<br>
    {<br>
    nameOfDisease:"DiseaseName",<br>
    "from":"yyyy/mm/dd",<br>
    "to":"yyyy/mm/dd",<br>
    "Notes":"Additional Notes"<br>
    }<br>
    
 4) Find Medical record by name of disease<br>
    path - localhost:3500/record/:userid/name<br>
    {<br>
       nameOfDisease:"DiseaseName"<br>
    }<br>
    
 5) Find Medical record by date range<br>
  path - localhost:3500/record/:userid/range<br>
  {<br>
      "from":"yyyy/mm/dd",<br>
      "to":"yyyy/mm/dd"<br>
  }<br>

 6) Logout<br>
    path - localhost:3500/user/:userid/logout<br>
