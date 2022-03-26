// Problem 1 start here--------*/
// anaToVori
function anaToVori(anas){
    if(anas>=16){
      var vori = anas / 16;
      return vori;   
    }
    else{
        return "Less then 16 ana is not acceptable for vori";
    }
}
// var myana = anaToVori(100);
// console.log(myana);


// Problem 2 start here--------*/
// pandaCost
function pandaCost(shingara, samosa, jilapi){
    if(shingara>=0 && samosa>=0 && jilapi>=0){
    var shingaraPrice = shingara * 7;
    var samosaPrice = samosa * 10;
    var jilapiPrice = jilapi * 15;
    var totalCost = shingaraPrice + samosaPrice + jilapiPrice;
    return totalCost;
    }
    else{
        return "Product will never be zero or negative.";
    }
}

// var totalProduct = pandaCost(10, 10, 20);
// console.log(totalProduct);


// Problem 3 start here--------*/
// picnicBudget
function picnicBudget(members){
    var budget = 0;
    if (members>0){

        if(members<=100){
            budget = members * 5000;
        }
        else if(members<=200){
            var first100Members = 100 * 5000;
            var remaining = members - 100;
            var second100Members = remaining * 4000;
            budget = first100Members + second100Members;
        }
        else if (members>=201){
            var first100Members = 100 * 5000;
            var second100Members = 100 * 4000;
            var remaining = members - 200;
            var anyMamberMorethan200Members = remaining * 3000;
            budget =first100Members + second100Members + anyMamberMorethan200Members;
        }
        
    }
    
    else {
        return "No needed any budget if member numebers will zero or negative.";
    }
    return budget; 

}

//  var totalPicnicBudget = picnicBudget(280);
//  console.log(totalPicnicBudget);


// Problem 4 start here--------*/

function oddFriend(arr){
    var value =0;
    for (var i=0;i<arr.length;i++){ 
      if(arr[i] % 2 != value){ 
       value = arr[i].length;
        var firstOdd = arr[i];   
        
      }
    }
    return firstOdd;   
  }

    var friendName =  oddFriend(['sad','eva'])
    console.log(friendName);   