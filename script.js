document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const hectareValue = parseFloat(document.getElementById('hectareValue').value);
    const areValue = parseFloat(document.getElementById('areValue').value);
    const sqMeterValue = parseFloat(document.getElementById('sqMeterValue').value);
    const vighaType = document.getElementById('vighaType').value;
 const number = 23.5;
const stringNumber = '' + number;
    let bighaFromHectare, bighaFromAre, bighaFromSqMeter;

    if (vighaType === '16') {
        bighaFromHectare = hectareValue * 6.1777; // Assuming 1 hectare = 3.953686 bigha for 16 parts
        bighaFromAre = areValue * 0.0618; // Assuming 1 are = 0.03953686 bigha for 16 parts
        bighaFromSqMeter = sqMeterValue *0.0006; // Assuming 1 bigha = 1600 sq meters for 16 parts
    } else if (vighaType === '23.5') {
        bighaFromHectare = hectareValue * 4.2061; // Assuming 1 hectare = 2.47105 bigha for 23 parts
        bighaFromAre = areValue * 0.0421; // Assuming 1 are = 0.0247105 bigha for 23 parts
        bighaFromSqMeter = sqMeterValue *0.0004; // Assuming 1 bigha = 2471.05 sq meters for 23 parts
    }

    const totalBigha = bighaFromHectare + bighaFromAre + bighaFromSqMeter;
    
    document.getElementById('result').innerText = `Converted Value: ${totalBigha.toFixed(5)} vigha`;
});
