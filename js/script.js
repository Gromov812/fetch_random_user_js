'use strict'
        
        window.onload = loadUsers();

        function getRandomGradient() {

          let getRgb = () => Math.floor(Math.random() * 255);

          let bg = `linear-gradient(45deg, rgb(${getRgb()} ${getRgb()} ${getRgb()}), rgb(${getRgb()} ${getRgb()} ${getRgb()}))`;
          document.querySelector('.upper').style.background = bg;
        }

        function getRandomData() {

            let result = new Object();

            result.followers = Math.floor(Math.random() * (10000 - 1000)) + 1000;
            result.projects = Math.floor(Math.random() * (100 - 10)) + 10;
            result.rank = Math.floor(Math.random() * (200 - 1)) + 1;
            result.id =  Math.floor(Math.random() * (12 - 1)) + 1;
            return result;

        }


        function getSomeUser(userId) {
           let user = fetch(`https://reqres.in/api/users/${userId}`)
            .then(data => data.json())
            return user;
        }
         
        function loadUsers(){
          getSomeUser(getRandomData().id).then(res => {
            console.log(res.data);
            document.querySelector('#avatar').innerHTML = `<img src =\"${res.data.avatar}\" alt=\"${res.data.first_name} ${res.data.last_name}\" class=\"rounded-circle\" width=\"80\">`;
            document.querySelector('#name').innerHTML = `${res.data.first_name} ${res.data.last_name}`;
            document.querySelector('#email').innerHTML = `${res.data.email}`;
            document.querySelector('#followers').innerHTML = `${getRandomData().followers}`;
            document.querySelector('#projects').innerHTML = `${getRandomData().projects}`;
            document.querySelector('#rank').innerHTML = `${getRandomData().rank}`;
            getRandomGradient();
        }).catch(err => {
            console.log(err);
        })
    }

document.querySelector('#reload').addEventListener('click', loadUsers);
