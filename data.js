try{
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        var Arr=JSON.parse(this.response);
        if(Arr!=null){
        for(let i=0;i<Arr.length;i++)
        {
            var table=document.getElementById('data');
            var row=table.insertRow(1);
            var cell1=row.insertCell(0);
            var cell2=row.insertCell(1);
            var cell3=row.insertCell(2);
            var cell4=row.insertCell(3);
            var cell5=row.insertCell(4);
            var cell6=row.insertCell(5);
            var cell7=row.insertCell(6);
            var cell8=row.insertCell(7);
            var cell9=row.insertCell(8);
            var cell10=row.insertCell(9);
            var cell11=row.insertCell(10);
            cell1.innerHTML=Arr[i].id;
            cell2.innerHTML=Arr[i].name;
            cell3.innerHTML=Arr[i].username;
            cell4.innerHTML=Arr[i].email;
            cell5.innerHTML=Arr[i].address.city;
            cell6.innerHTML=Arr[i].phone;
            cell7.innerHTML=Arr[i].address.street;
            cell8.innerHTML=Arr[i].website;
            cell9.innerHTML=Arr[i].company.name;
            cell10.innerHTML=Arr[i].address.zipcode;
            cell11.innerHTML='<button class="btn btn-success" onclick="upd(this)">Update</button>&nbsp&nbsp<button class="btn btn-danger" id="del" onclick="del(this)">Delete</button>';
        }
    }
    else{
         alert('oops....! there is some error');
    }
   
    }
    xhttp.open('Get','https://jsonplaceholder.typicode.com/users');
    xhttp.send();
}
catch(err)
{
    console.log(err);
}

const del=(k)=>{
    var value=k.parentNode.parentNode.rowIndex;
    document.getElementById('data').deleteRow(value);
} 
const upd=(r)=>{
    try{
     row=r.parentNode.parentNode.rowIndex;
    var name=document.getElementById('data').rows[row].cells[2].innerHTML;
    var email=document.getElementById('data').rows[row].cells[3].innerHTML;
    var city=document.getElementById('data').rows[row].cells[4].innerHTML;
    document.getElementById('user').value=name;
    document.getElementById('emailid').value=email;
    document.getElementById('city').value=city;
    for(let i=0;i<=Arr.length;i++)
     {
         if(name===Arr[i].username && email===Arr[i].email && city===Arr[i].address.city)
         {
            alert('hello'); 
         }    
     }
    }
    catch(err)
    {
        console.log(err);
    }
 
    
}

const save=()=>{
    try{
       var uName=document.getElementById('user').value;
       var eMail=document.getElementById('emailid').value;
       var City=document.getElementById('city').value;
       document.getElementById('data').rows[row].cells[2].innerHTML=uName;
       document.getElementById('data').rows[row].cells[3].innerHTML=eMail;
       document.getElementById('data').rows[row].cells[4].innerHTML=City;

    }
    catch(e){
        console.log(e);
    }
}

   
    
    