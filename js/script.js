/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);
   const studentList = document.querySelector('.student-list');
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {

         const studentItem = document.createElement('li');
         studentItem.className = 'student-item';
         
         
         const studentDetails = document.createElement('div');
         studentDetails.className = 'student-details';
         studentItem.appendChild(studentDetails);
         
         const avatar = document.createElement('img');
         avatar.src = list[i].picture.medium;
         avatar.className = "avatar";
         avatar.alt = "Profile Picture"
         studentDetails.appendChild(avatar);
        
         const h3 = document.createElement('h3');
         h3.textContent = `${list[i].name.title} ${list[i].name.first} ${list[i].name.last}`;
         studentDetails.appendChild(h3);
         
         const email = document.createElement('span');
         email.className = 'email';
         email.textContent = list[i]['email'];
         studentDetails.appendChild(email);
         
         const joinedDetails = document.createElement('div');
         joinedDetails.className = 'joined-details';
         studentItem.appendChild(joinedDetails);

         const date = document.createElement('span');
         date.className = 'date';
         date.textContent = `joined ${list[i].registered.date}`;
         joinedDetails.appendChild(date);

         studentList.appendChild(studentItem);
      }
      
   }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numberOfPages = list.length/9;
   const linkList = document.querySelector('.link-list');
  //linkList.innerHTML = '';
   for (let i = 0; i < numberOfPages; i++) {
      const li = document.createElement('li');
      const button = document.createElement('button')
      button.type = "button";
      button.textContent = i + 1;
      li.appendChild(button);
      //linkList.insertAdjacentHTML('beforeend', li.innerHTML);
      linkList.appendChild(li);
   }
   linkList.querySelector('button').className = 'active';
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName == 'BUTTON') {
         for (let i = 0; i < numberOfPages; i++) {
            linkList.querySelectorAll('button')[i].className = '';
      }
         e.target.className = 'active';
         const studentList = document.querySelector('.student-list');
         studentList.innerHTML = '';
         showPage(list, e.target.textContent)
      }
   });
}



// Call functions
showPage(data, 1);

addPagination(data);

