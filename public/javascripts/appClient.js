/* Filename: appClient.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 18th, 2022 */

console.log("It goes to the client side!");

if(getTitle == "Inventory List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}