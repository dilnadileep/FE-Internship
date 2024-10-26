   const clickButton=document.getElementById('clickButton');
   const firstdiv=document.getElementById('firstdiv');
   const inputField=document.getElementById('inputField');

   const colorBox=document.getElementById('colorBox');

   const itemList=document.getElementById('itemList');
   const listItems=itemList.getElementsByTagName('li');


   firstdiv.style.textAlign='center';
   firstdiv.style.backgroundColor='#faf3e0';
   firstdiv.style.margin='60px';
   firstdiv.style.padding='20px';
   clickButton.style.margin='10px';
   inputField.style.margin='10px';

   itemList.style.textAlign='center';
   itemList.style.margin='80px';


//A button for handling click event.
   clickButton.addEventListener('click', function() {
        this.style.backgroundColor='#0056b3';
   });
//2. An input field to handle keypress events.
   inputField.addEventListener('keypress', (event) => {
       console.log(`Key: ${event.key}`);
   });


   //4.A div element that changes color when the user hovers over it.

   colorBox.addEventListener('mouseover', function() {
       colorBox.style.backgroundColor = '#395067';

   });
   colorBox.addEventListener('mouseout', function() {
       colorBox.style.backgroundColor = 'lightgrey';
    //    colorBox.style.color= '#faf3e0';

   });

   itemList.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') { //checking if the clicked elemnt is li

        alert(`You clicked on: ${event.target.textContent}`);
        event.target.style.color = 'blue'; 
    }
});
   itemList.addEventListener('click',function() {
    console.log('Bubbling');
   });
 

   for (let item of listItems) {
       item.addEventListener('click', function() {
           console.log('list items');
       });
   }
   itemList.addEventListener('click', (event) => {
    console.log('Capturing');
}, true);