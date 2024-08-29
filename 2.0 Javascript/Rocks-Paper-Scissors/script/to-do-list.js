        const toDoList = [];


        function addToDo() {
            //To get the text in the textblock we use document.query
            const inputElemnt = document.querySelector('.js-name-input');
            
            //To get the text out
            const name = inputElemnt.value;
            //console.log(name);
            //now to add it to array
            toDoList.push(name);
            console.log(toDoList);

            //resets the textbox
            inputElemnt.value = '';
        }

        