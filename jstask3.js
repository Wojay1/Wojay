const myNumb = (int) => {
    numbArray = []
    for(i = 1; i <= int; i++){
        val =  i;
        stringVal = [];
        if (i % 2 == 0){
            stringVal.push("yu");

        }

        if (i % 3 == 0){
            stringVal.push("gi");
        }

        if (i % 5 == 0){
            stringVal.push("oh");
        }

        if (stringVal.length != 0){
            val = stringVal.join("-");
        }

        else {
            val = i
        }

        numbArray.push(val);
        
    }

    console.log(numbArray);
    return numbArray;
}

myNumb(100);
myNumb(69);