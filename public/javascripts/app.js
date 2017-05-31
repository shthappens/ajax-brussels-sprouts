// // request a new dish and alert the user

$('#get-dish').on('click', (event) => {
  event.preventDefault();

  let request = $.ajax({
    method: 'GET',
    url: '/dishes/random.json'
  });

    request.done((randomDish) => {
      alert('Here\'s a random dish: ' + (randomDish['dish']));
    });
});
