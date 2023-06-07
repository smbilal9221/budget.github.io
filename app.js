var budget=0, expense=0, balance=0, overV=0, delAmount=0;
var expeseObjectVar;
var expenseLst = [];
var overViewLst =[];

//add budget function hide or visible
function AddExpLst(){
    document.getElementById("hideAddExpense").style.display="block"
    
    document.getElementById("visbleExpeLst").style.display="none";//its always block only this function it will be none
    
    document.getElementById("delete").style.display="none";//its always block only this function it will be none
    
    document.getElementById("expRecordBorder").style.display="none";//its always block only this function it will be none

    //initial control hid or block then block or none control filedsubmit() function
}

//budget values function
function setBudget()
{
    bud = document.getElementById("setBudgetTxt");
    budget=(parseInt (bud.value)) ;
    expense= expense ;
    balance= budget- expense;
    // call function for updating overview list
    overV = overView();
    
    document.getElementById("totalBudget").innerText = overV[0];//HTML text Change 
    document.getElementById("expense").innerText = overV[1];//HTML text Change 
    document.getElementById("balane").innerText = overV[2];//HTML text Change  

}



//field submit function
function fieldSubmit(){
    

    let cata = document.getElementById("catagory");
    let catagory= cata.value;
    
    let des = document.getElementById("description");
    let description= des.value;
    
    
    let amou = document.getElementById("amount");
    let amount = parseInt( amou.value); 
    
    let dat = document.getElementById("date");
    let date = dat.value;
    

    expeseObjectVar = ExpenLis(catagory, description, amount, date);//Expense function list Call
    expenseLst.push(expeseObjectVar);

    var myArray = Object.entries(expenseLst);

    var arrayContent = "";
    for (var i = 0; i < myArray.length; i++) {
           
      arrayContent += "<p>" + "Item No : " + (i + 1)  + "<br>" + "Catagory : " + myArray[i][1].catagory + "<br>" + "Description : " +  myArray[i][1].Description + "<br>" + "Amount : "+ myArray[i][1].Expense + "<br>" + "Date : " +  myArray[i][1].Date + "</p>" ;
      
    }
    document.getElementById("expRecord").innerHTML = arrayContent;


    // set Over View Section      
    expense= expense + amount;
    balance= budget- expense;
    
   // call function for updating overview list
    overV = overView();
    
    document.getElementById("totalBudget").innerText = overV[0];//HTML text Change 
    document.getElementById("expense").innerText = overV[1];//HTML text Change 
    document.getElementById("balane").innerText = overV[2];//HTML text Change  

    //hide Add-expense list using Add Btn
    document.getElementById("hideAddExpense").style.display="none";
    document.getElementById("visbleExpeLst").style.display="block";//its always block only this function it will be none

    document.getElementById("delete").style.display="block";//its always block only this function it will be none
    document.getElementById("expRecordBorder").style.display="block";//its always block only this function it will be none
    
}
function ExpenLis ( cato, desc, am, dt)//function for create object when click add 
 {
    var exp = {
    catagory : cato ,
    Description : desc,
    Expense : am,
    Date : dt
}
    return exp

};

function overView()
{
    overViewLst.splice(0, 1, budget);
    overViewLst.splice(1, 1, expense);
    overViewLst.splice(2, 1, balance);
    return overViewLst;
   
}

function backClick(){
//hide Add-expense list using Back Btn
document.getElementById("hideAddExpense").style.display="none";
document.getElementById("visbleExpeLst").style.display="block";//its always block only this function it will be none
document.getElementById("expRecordBorder").style.display="block";//its always block only this function it will be none
document.getElementById("delete").style.display="block";//its always block only this function it will be none

if (expense <= 0){
    document.getElementById("delete").style.display="none";//its always block only this function it will be none
    document.getElementById("visbleExpeLst").style.display="none";//its always block only this function it will be none
    document.getElementById("expRecordBorder").style.display="none";//its always block only this function it will be none
                    
    }


}

//delete expense list item
function delet(){
var delet 

var val = document.getElementById("deleteItem");
var delIndex =parseInt(val.value)-1;

//splice the array content
var deleArray = Object.entries(expenseLst);
for (var i = 0; i < deleArray.length; i++) {
 
delet = expenseLst.indexOf(deleArray[i][1]);//delet is the index no

if( delet === delIndex)
    {
    delAmount=parseInt( deleArray[delet][1].Expense);// extract delete index amount beacuse update of update bacalnce  
    expenseLst.splice(delIndex, 1);
    break;
 
    }
}
//updation after delete
var updatArray = Object.entries(expenseLst);

    var arrayContentupdat = "";
    for (var i = 0; i < updatArray.length; i++) {
        arrayContentupdat += "<p>" + "Item No : " + (i + 1)  + "<br>" + "Catagory : " + updatArray[i][1].catagory + "<br>" + "Description : " +  updatArray[i][1].Description + "<br>" + "Amount : "+ updatArray[i][1].Expense + "<br>" + "Date : " +  updatArray[i][1].Date + "</p>" ;
           
    }
        document.getElementById("expRecord").innerHTML = arrayContentupdat;

        expense= expense- delAmount;
        balance= balance + delAmount; //update balance
        if (expense <= 0){
        document.getElementById("delete").style.display="none";//its always block only this function it will be none
        document.getElementById("visbleExpeLst").style.display="none";//its always block only this function it will be none
        document.getElementById("expRecordBorder").style.display="none";//its always block only this function it will be none
                        
        }
        overV = overView();//update overView Function
        document.getElementById("totalBudget").innerText = overV[0];//HTML text Change 
        document.getElementById("expense").innerText = overV[1];//HTML text Change 
        document.getElementById("balane").innerText = overV[2];//HTML text Change  


}