

function total_calculation(){

    var m1=parseInt(document.getElementById('maths').value) || 0;
    var m2=parseInt(document.getElementById('science').value) || 0;
    var m3=parseInt(document.getElementById('english').value) || 0;

    var total=m1+m2+m3;

    var avg=(total/3).toFixed(1);  //toFixed used to show how many numbers after decimal can show
    var grade;

    switch(true)
    {
        case(avg>=90):
            grade='A';
        break;

        case(avg>=80):
            grade='B';
        break;

        case (avg>=70):
            grade='C';
        break;

        case (avg>=70):
            grade='C';
        break;

        case (avg>=60):
            grade='D';
        break;

        case (avg<=60):
            grade='F';
        break;
 
    }

    document.getElementById('total-marks').innerHTML=total;
    document.getElementById('average-marks').innerHTML=avg;
    document.getElementById('grade').innerHTML=grade;
}