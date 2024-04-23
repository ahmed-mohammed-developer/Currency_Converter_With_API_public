function convertCurrency() {
     const amount = document.querySelector(".amount").value;
     const form = document.querySelector(".form").value;
     const to = document.querySelector(".to").value;
     const resultDiv = document.querySelector(".result");

     if (amount && form && to) {
          fetch(`https://v6.exchangerate-api.com/v6/4c813414fd6a2069f62d3c3d/latest/${form}`)
          .then((response) => response.json())
          .then((data) => {
               //console.log(data);
               const rate = data.conversion_rates[to];
               const result = (amount * rate).toFixed(2);
               resultDiv.innerHTML = `${amount} ${form} = ${result} ${to}`;
          })
          .catch((error) => {
               resultDiv.innerHTML = `Somthing Went Worng ${error}`;
          });
     } else {
          resultDiv.innerHTML = " plese fill all fields"
     }
     };
