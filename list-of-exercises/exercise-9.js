function gradeEvaluation(grade) {
    const roundedGrade = grade;
    if (roundedGrade < 40) {
        console.log('Reproved');
        return;
    }

    console.log('Approved');
}

function roundGrade(grade) {
    if (grade < 38) return grade;
    if (grade % 5 >= 3 ) return grade + (5 - (grade % 5))
   
    return grade - (grade % 5);
}

gradeEvaluation(29);
gradeEvaluation(38);
gradeEvaluation(84);