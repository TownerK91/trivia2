var pos = 0,
        test, test_status, question, choice, choices, a, b, c, correct = 0, 

        timer = 25

        //arrays within an array assigned to variable questions.
        //index 0 is the actual question per each array and the following [pos][1],[2],[3] are the possible answers with the last index [4] being the value or the answers to the index [0
        questions = [
            ["What are the names of the little orange men?", "Charzards", "Oompa Loompas", "Djinns", "b"],
            ["What was Gene Wilder's condition for accepting the role of Willy Wonka?", "He wears a purple suit", "He gets a pound of free chocolate", "His opening scene he gets to walk out with a limp and a cane.", "c"],
            ["Who financed the original movie?", "Quaker Oats", "President George Bush", "My Mother", "a"],
            ["What was the chcoclate river made of?", "Chocolate and Cream", "Water", "All three", "c"],
            ["How much of the chocolate room was edible?", "100%", "0%", "33%", "c"]
        ];








    function _(x) {
        return document.getElementById(x);
    }







    function renderQuestion() {
        // clear the timer interval
            window.clearInterval()

        // set the timer interval
            setInterval(function(){ 
                alert("You lose, Johnny, you lose!"); }, 25000);



        // displays the question

        test = _("test");
        if (pos >= questions.length) {
            test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
            _("test_status").innerHTML = "Test Completed";
            pos = 0;
            correct = 0;
            return false;
        }

        _("rules").innerHTML = "You have 25 seconds to answer 5 Willy Wonka questions that every chocolate lover should know.";
        _("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
        //question is the first position of all 5 arrays 
        question = questions[pos][0];
        //options a-c of positions 1-3 of the array
        a = questions[pos][1];
        b = questions[pos][2];
        c = questions[pos][3];
        //dynamically playing the arrays on the page
        test.innerHTML = "<h3>" + question + "</h3>";
        test.innerHTML += "<input type='radio' name='choices' value='a'> " + a + "<br>";
        test.innerHTML += "<input type='radio' name='choices' value='b'> " + b + "<br>";
        test.innerHTML += "<input type='radio' name='choices' value='c'> " + c + "<br>";
        //submit button to move on to the next question
        test.innerHTML += "<button onclick='checkAnswer()'>next question</button>";
        
    }

    function checkAnswer() {

        // as a safe measure, clear

        window.clearInterval()
        choices = document.getElementsByName("choices");
        for (var i = 0; i < choices.length; i++) {
            if (choices[i].checked) {
                choice = choices[i].value;
            }
        }
        if (choice == questions[pos][4]) {
            correct++;
        }
        pos++;
        renderQuestion();
    }




    window.addEventListener("load", renderQuestion, false);


//I ended up running out of time and was not able to figure out some things like getting the countdown..
//timer on the page and getting the countdown to reset and repeat throough each array within the questions array.
//Currently, the entire quiz is being generated dynamically with the variable "questions" holding 5 separate arrays 
//the index 0 is the actual question and indexes 1-4 being the possible answers which hold the values of a-c and the last index holds the value information
//for the correct answer. Originally, I had bootstrap displaying a much more aesthetically pleasing page, but the footer and bootstrap is having
//a difficult time holding the dynamic button as it seems to hide behind the footer and the column height