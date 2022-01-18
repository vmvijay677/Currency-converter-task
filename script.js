async function getdata(){
    var x = document.getElementById("currency1").value;
    var y = document.getElementById("currency2").value;
    
    try {

        let s1 = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${x}/${y}.json`);
        let s2 = await s1.json();

        document.getElementById("span1").innerHTML = document.getElementById("input1").value;
        document.getElementById("span2").innerHTML = `${document.getElementById("currency1").value} =`;
        document.getElementById("span4").innerHTML = `${document.getElementById("currency2").value}`;

        const myjson = JSON.stringify(s2);
        localStorage.setItem("testJSON",myjson);
        let text  = localStorage.getItem("testJSON");
        let obj = JSON.parse(text);
        for(var i in obj){
            document.getElementById("span3").innerHTML = (obj[i] * document.getElementById("input1").value).toFixed(2);
        }

    } catch (error) {
        console.log(error);
    }   
}
