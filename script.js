async function getapi(){
    const x = prompt("Which user will you 'd like to see")
    var response = await fetch(`https://api.github.com/users/${x}`)
    var coderData = await response.json();
    console.log(coderData)
    document.getElementById("box").innerHTML = `<h2>${coderData.name} has ${coderData.followers} Followers </h2>`;
    document.getElementById("pic").src= coderData.avatar_url;

}

// var data = {
//     "orders": [
//     {
//         "orderno": 784692,
//         "date": "June 30, 2088 1:54:23 AM",
//         "trackingno": "TN000391",
//         "customer": {
//             "custid": 11045,
//             "fname": "Sue",
//             "lname": "Hatfield",
//             "address": "1409 Silver Street",
//             "city": "Ashland",
//             "state": "NE",
//             "zip": 68003
//         }
//     },
//         {
//         "orderno": 784693,
//         "date": "March 3, 2088 8:18:14 PM",
//         "trackingno": "TN000468",
//             "customer": {
//             "custid": 11045,
//             "fname": "Sue",
//             "lname": "Hatfield",
//             "address": "1409 Silver Street",
//             "city": "Ashland",
//             "state": "NE",
//             "zip": 68003
//             }
//         }
//     ]
// }

// console.log(typeof(data));
// console.log(Array.isArray(data));
// console.log(Array.isArray(data.orders));
// console.log(data.orders[0].orderno);
// console.log(data);


// console.log(data);
// console.log(data.orders[0]);
// console.log(data.orders[0].customer.address);


