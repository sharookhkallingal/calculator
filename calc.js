function displayData(n){
    result.value+=n
}

function clearData(){
    result.value=""
}

function deleteData(){
    result.value=result.value.slice(0,-1)
}

function evalData(){
    result.value=eval(result.value)
}
