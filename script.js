console.log("hello");

let projectArr=[]
projectArr.push("https://apna-market.netlify.app/")

let display=document.getElementById('project');

let div1=document.createElement("iframe")
display.appendChild(div1)
 div1.setAttribute("src",projectArr[0])
 div1.style.height="350px"
 div1.style.width="50vw"
 div1.style.borderRadius="10px"


