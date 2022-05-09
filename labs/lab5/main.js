let multipleChoice = [
    {
        'question': 'What is the capital city of Azerbaijan?',
        'answers': [
            'Baki', 'Tokio', 'Moscow', 'Rome', 'Brasil'
        ],
        'correct': 'Baki'
    }
];

let freeResponse = [
    {
        'question': 'What is capital city of Italy?',
        'correct': 'Rome'
    }
];

let part1Qs = document.querySelector('#part-1-qs');
let part1Qanswered = false;
for (let entity of multipleChoice) {
    let entityContainer = document.createElement('div');
    let questionHeader = document.createElement('h3');
    questionHeader.textContent = entity.question;
    entityContainer.append(questionHeader);

    let answersContainer = document.createElement('div');
    for (let answer of entity.answers) {
        let answerEl = document.createElement('button');
        answerEl.textContent = answer;

        answerEl.onclick = function() {
	    if (part1Qanswered)
		return;
            let result = document.createElement('span');
            if (answerEl.textContent === entity.correct) {
                answerEl.style.background = 'green';
                result.textContent = 'Correct';
            } else {
                answerEl.style.background = 'red';
                result.textContent = 'Incorrect';
            }
            entityContainer.append(result);
	    part1Qanswered = true;
        };

        answersContainer.append(answerEl);
    }
    entityContainer.append(answersContainer);
    part1Qs.append(entityContainer);
}

let part2Qs = document.querySelector('#part-2-qs');
for (let entity of freeResponse) {
    let entityContainer = document.createElement('div');
    let questionHeader = document.createElement('h3');
    questionHeader.textContent = entity.question;
    entityContainer.append(questionHeader);

    let answer = document.createElement('input');
    answer.type = 'text';
    let submit = document.createElement('button');
    submit.textContent = 'Check Answer';
    entityContainer.append(answer);
    entityContainer.append(submit);

    submit.onclick = function() {
        let result = document.createElement('span');
        result.style.display = 'block';
        if (answer.value.trim() === entity.correct) {
            answer.style.background = 'green';
            result.textContent = 'Correct';
        } else {
            answer.style.background = 'red';
            result.textContent = 'Incorrect';
        }
        entityContainer.append(result);
        submit.onclick = null;
    }
    part2Qs.append(entityContainer);
}

