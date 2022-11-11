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
            cell1.innerHTML=Arr[i].id;
            cell2.innerHTML=Arr[i].name;
            cell3.innerHTML=Arr[i].username;
            cell4.innerHTML=Arr[i].email;
            cell5.innerHTML=Arr[i].address.city;
            cell6.innerHTML='<button class="btn btn-success" onclick="upd(this)">Update</button>&nbsp&nbsp<button class="btn btn-danger" id="del()">Delete</button>';
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

const upd=(r)=>{
    try{
    var row=r.parentNode.parentNode.rowIndex;
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