var scores = {
    "kor": 55,
    "mat": 75,
    "eng": 50
}

if(scores['kor'] < 40 || scores['mat'] < 40 || scores['eng'] < 40 || (scores['kor'] + scores['mat'] + scores['eng'])/3 < 60 ){
    document.write("fail");    
}else{
    document.write("pass");
}

// 시험 합격 여부