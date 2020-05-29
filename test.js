  function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const h3 = document.getElementById('coronas');
  const url = 'https://corona.lmao.ninja/v2/countries/Philippines';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let coronas = data;
    return coronas.map(function(corona) {
      let span = createNode('span');
      span.innerHTML = "Infected today are " + `${corona.cases}`;
      append(h3, span);
    })
  })
  .catch(function(error) {
    console.log(error);
  });	