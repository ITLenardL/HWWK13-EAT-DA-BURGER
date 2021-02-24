// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // Change devour state on click of .change-devour
    $('.change-devour').on('click', function(event) {
      event.preventDefault();
      const id = $(this).data('id');
      const newDevour = $(this).data('newdevour');
  
      const newDevouredState = {
        devoured: newDevour,
      };
  
      // Send the PUT request.
      $.ajax(`/api/burgers/${id}`, {
        type: 'PUT',
        data: newDevouredState,
      }).then(function() {
        console.log('changed devoured to', newDevour);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $('.create-form').on('submit', function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const burgerValue = $('#br')
        .val()
        .trim();
      if (burgerValue) {
        const newBurger = {
          burger_name: $('#br')
            .val()
            .trim(),
          devoured: 0,
        };
  
        // Send the POST request.
        $.ajax('/api/burgers', {
          type: 'POST',
          data: newBurger,
        }).then(function() {
          console.log('created new burger');
          // Reload the page to get the updated list
          location.reload();
        });
      }
    });
  
    // Delete selected burger
    $('.delete-burger').on('click', function(event) {
      const id = $(this).data('id');
  
      // Send the DELETE request.
      $.ajax(`/api/burgers/${id}`, {
        type: 'DELETE',
      }).then(function() {
        console.log('deleted burger', id);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });