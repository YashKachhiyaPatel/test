const Id     = document.getElementById('Id')
const f_name  = document.getElementById('f_name');
const l_name  = document.getElementById('l_name');
const age  = document.getElementById('age');


const insertbtn = document.getElementById('Insert');
const deletebtn = document.getElementById('Delete');
const updatebtn = document.getElementById('Update');

const database = firebase.database();

const rootRef = database.ref('users');


  insertbtn.addEventListener('click',(e) =>{
  		e.preventDefault();
  		database.ref('users/'+ Id.value).set({
  			firstname:f_name.value,
  			lastname:l_name.value,
  			age:age.value

  		});
  });

    updatebtn.addEventListener('click',(e) =>{

  		e.preventDefault();
  		
  		const newData = {

  			firstname:f_name.value,
  			lastname:l_name.value,
  			age:age.value

  		}
  		rootRef.child(Id.value).update(newData);

  	});

  	deletebtn.addEventListener('click',(e) =>{
  		e.preventDefault();

  		rootRef.child(Id.value).remove();
  		alert('user data deleted');

  	});

  