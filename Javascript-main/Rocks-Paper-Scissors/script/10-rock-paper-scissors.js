




        let score = JSON.parse(localStorage.getItem
            ('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            };

            updateScoreElement();

        function playGame(playerMove){

        const computerMove = (pickComputerMove()); 

        let result = '';


        if(playerMove === 'scissors'){

                if (computerMove === 'scissors'){
            result = 'Tie';
            } else if (computerMove === 'paper') {
                result = 'You Win';
            } else if (computerMove === 'rock') {
                result = 'You Lose';
            }

            if(result === 'You Win'){
                score.wins += 1;
                
            } else if(result === 'You Lose'){
                score.losses +=1;
            } else if(result === 'Tie'){
                score.ties +=1;
            }

            //LOCAL STORAGE
            //Local storage only store Strings so 
            //convert with JSON.stringify
            localStorage.setItem('score', JSON.stringify(score));


            updateScoreElement();
            
            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector(`.js-moves`)
            .innerHTML = `You pick <img src="images/${playerMove}-emoji.png" class="icon"> <img src="images/${computerMove}-emoji.png" class="icon"> Computer Move `;
            }

            else if (playerMove === 'paper'){

            const computerMove = (pickComputerMove());
            pickComputerMove();
            let result = '';



            if (computerMove === 'paper'){
            result = 'Tie';
            } else if (computerMove === 'scissors') {
                result = 'You lose';
            } else if (computerMove === 'rock') {
                result = 'You Win';
            }

            if(result === 'You Win'){
                score.wins += 1;
                
            } else if(result === 'You Lose'){
                score.losses +=1;
            } else if(result === 'Tie'){
                score.ties +=1;
            }

            updateScoreElement();

            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector(`.js-moves`)
            .innerHTML = `You pick <img src="images/${playerMove}-emoji.png" class="icon"> <img src="images/${computerMove}-emoji.png" class="icon"> Computer Move `;

            } else if (playerMove === 'rock'){


                const computerMove = (pickComputerMove());
            pickComputerMove();
            let result = '';



            if (computerMove === 'rock'){
            result = 'Tie';
            } else if (computerMove === 'paper') {
                result = 'You lose';
            } else if (computerMove === 'scissors') {
                result = 'You Win';
            }

            if(result === 'You Win'){
                score.wins += 1;
                
            } else if(result === 'You Lose'){
                score.losses +=1;
            } else if(result === 'Tie'){
                score.ties +=1;
            }
            
            updateScoreElement();

            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector(`.js-moves`)
            .innerHTML = `You pick <img src="images/${playerMove}-emoji.png" class="icon"> <img src="images/${computerMove}-emoji.png" class="icon"> Computer Move`
            
            
            
            ;


            alert(`You picked scissors. Computer picked ${computerMove}. ${result}
        Win: ${score.wins},   Lose: ${score.losses},  Tie: ${score.ties}`);
            }
        } 
        //-------------------------



        function pickComputerMove(){

        const randomNumber = Math.random();

        let computerMove = '';

        if(randomNumber >= 0 && randomNumber < 1/3){
            computerMove = 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = 'paper';
        } else if(randomNumber < 1){
            computerMove = 'scissors';
        }


        return computerMove; //returns the number allows it inside the scope

        }


        //----------------------------- 

        function updateScoreElement(){

        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        } 

        function updateMoveElement(){

        document.querySelector(`.js-moves`)
            .innerHTML = `You  pick ${playerMove} - Computer picked ${computerMove} `;

        }

        function updateResultElement(){
        document.querySelector('.js-result')
            .innerHTML = result;
        }