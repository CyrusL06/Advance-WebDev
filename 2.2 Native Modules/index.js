const fs = require("fs");

// // NODE was able to make us new message.txt without worrying bout it too much
// fs.writeFile("message.txt", "Hello Node", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });

// ALL OF THIS CAN BE SEEN THROUGH A DICTIONARY 
            //PATH        //OPTION
fs.readFile('./message.txt', "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});