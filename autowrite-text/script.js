const text = "Hello, my name is Rafael!";
let index = 0;
function autoWrite() {
    document.body.innerText = text.slice(0,index);
    /*A função slice funciona da seguinte forma, ela divide um array em index do inicio e index do fim, não inclusivo
    Ex:. array = [1,2,4,52,9];
    array.slice(0,3), significa criar um sub-array contendo [1,2,4] o terceiro index não é incluso.*/
    index++;
    if(index>text.length){
        index=0;
    }
}
setInterval(autoWrite, 100);