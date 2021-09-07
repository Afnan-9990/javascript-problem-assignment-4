
// Problem 1 start--------*/

// seerToMon
function seerToMon(seers){
    if(seers>=40){
      var mon = seers / 40;
      return mon;   
    }
    else{
        return "Less then 40 seer quantity is not acceptable";
    }
}

// var mySeer = seerToMon(1020);
// console.log(mySeer);


// Problem 1 end-----*/


// Problem 2 start--------*/

// totalSales
function totalSales(shirt, pant, shoes){
    if(shirt>=0 && pant>=0 && shoes>=0){
    var shirtPrice = shirt * 100;
    var pantPrice = pant * 200;
    var shoesPrice = shoes * 500;
    var totalPrice = shirtPrice + pantPrice + shoesPrice;
    return totalPrice;
    }
    else{
        return "Product will never be zero or negative.";
    }
}

// var totalProduct = totalSales(10, 5, 2);
// console.log(totalProduct);

// Problem 2 end-----*/


// Problem 3 start--------*/

// deliveryCost
function deliveryCost(tShirt){
    var cost = 0;
    if (tShirt>0){

        if(tShirt<=100){
            cost = tShirt * 100;
        }
        else if(tShirt<=200){
            var first100TShirts = 100 * 100;
            var remaining = tShirt - 100;
            var second100TShirts = remaining * 80;
            cost = first100TShirts + second100TShirts;
        }
        else if (tShirt>=201){
            var first100TShirts = 100 * 100;
            var second100TShirts = 100 * 80;
            var remaining = tShirt - 200;
            var anyAmountAfter200TShirts = remaining * 50;
            cost =first100TShirts + second100TShirts + anyAmountAfter200TShirts;
        }
        
    }
    
    else {
        return "Product will never be zero or negative.";
    }
    return cost; 

}

//  var totalDeliveryCost = deliveryCost(600);
//  console.log(totalDeliveryCost);

// Problem 3 end-----*/



// Problem 4 start--------*/
// perfectFriend
function perfectFriend(friendList){
    var space= 5;
    var largest;
    for(var i = 0;i<friendList.length;i++){
        if(friendList[i].length == space){

            space = friendList[i].length;
            largest= friendList[i];
            break;
        }
    }
    return largest;
}

// var friendName = perfectFriend(['eva','abcdefg','afnan','abcde'])
// console.log(friendName);

// // Problem 4 end--------*/