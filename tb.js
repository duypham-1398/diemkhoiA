function OutAverage() {
    let math = parseInt(document.getElementById('math').value);
    let physic = parseInt(document.getElementById('physic').value);
    let chem = parseInt(document.getElementById('chem').value);
    ave = (math + physic + chem) /3;
    
    document.getElementById('average').innerHTML = "Điểm trung bình là " + ave + ".";
    if(ave>=0 && ave<5) {
        result = "Học lực yếu";
    } else if (ave>=5 && ave<6.5) {
        result = "Học lực trung bình";
    } else if (ave>=6.5 && ave<8) {
        result = "Học lực khá";
    } else if (ave>=8 && ave<=10) {
        result = "Học lực giỏi";
    } else {
        result = "điểm nhập sai, vui lòng nhập lại";
    }
    document.getElementById('result').innerHTML = result;
}