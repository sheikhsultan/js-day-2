var student = {id:222, phone:4444, name:"allu"};
var student2 = {id:222111, phone:1114444, name:"mahi"};


/**amra 3 bhabe output dekhate parbo */
var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];

var phoneNo3 = student[phonePropName];

//update phone
student2.phone = 090009;
student2["phone"] = 666888;
student2[phonePropName] = 999992222;

// to add some properties
student2.cinema = "ogni420";
student2["cinema"] = "smart girl";


console.log(phoneNo1);
console.log(student2);