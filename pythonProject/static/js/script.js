$(document).ready(function(){
$('#searchCategoryBtn').click(function(){
    $('.category-list-wrap').toggle();
});
});

$('#menuToggle').click(function(){
    $('.nav').toggle();
});


$(document).ready(function(){

	var current_fs, next_fs, previous_fs; //fieldsets
	var opacity;

	$(".next").click(function(){

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

		//Add Class Active
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

		//show the next fieldset
		next_fs.show();
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				next_fs.css({'opacity': opacity});
			},
			duration: 600
		});
	});

	$(".previous").click(function(){

		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();

		//Remove class active
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

		//show the previous fieldset
		previous_fs.show();

		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				previous_fs.css({'opacity': opacity});
			},
			duration: 600
		});
	});

	$('.radio-group .radio').click(function(){
		$(this).parent().find('.radio').removeClass('selected');
		$(this).addClass('selected');
	});

	$(".submit").click(function(){
		return false;
	})

	});

	$(window).on("scroll", function() {
		$(window).scrollTop() ? $("header").addClass("sticky") : $("header").removeClass("sticky")
	});



	// filter function
	$(document).ready(function() {

		  $('#search-input').keyup(function() {
			filterItems();
		  });

		  function filterItems() {

			var searchQuery = $('#search-input').val().toLowerCase();

			$('#item-list li').each(function() {
			  var itemText = $(this).text().toLowerCase();

			  if (

				(searchQuery === '' || itemText.includes(searchQuery))
			  ) {
				$(this).show();
			  } else {
				$(this).hide();
			  }
			});
		  }
		});


	// apply function
	 $(document).ready(function() {
		  $('.option').click(function() {
			$('.option').not(this).prop('checked', false); // Uncheck other checkboxes

			if ($(this).is(':checked')) {
			  $('#searchCategoryBtn').val($(this).val()); // Display value in text box
			   $(".category-list-wrap").hide(); //hidden
			} else {
			  $('#searchCategoryBtn').val(''); // Clear text box if unchecked
			}
		  });
		});

// copy-paste

function copyText(text, button) {
      var tempTextarea = document.createElement('textarea');
      tempTextarea.value = text;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextarea);

      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>';

      setTimeout(function() {
        button.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>';
      }, 3000); // Revert back to "Copy" after 4 seconds
    }

// DOMAIN AVAILABLE SIDEBAR FUNCTION
		$('#checkDomainAvailibility').click(function(){
			$('#sidebarDomain').addClass('domain-sidebar-slide');
		});
		$('#sidebarclose').click(function(){
			$('#sidebarDomain').removeClass('domain-sidebar-slide');
		});



function toggleDiv(index) {
            var div = document.getElementById("div" + index);
            if (div.style.display === "none") {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }


$('#cancelBtn').click(function(index) {
  $('#myDiv').hide();
});


// Add event listener to each cancel button
    var cancelBtns = document.querySelectorAll("[id^='cancelBtn']");
    cancelBtns.forEach(function(cancelBtn) {
        cancelBtn.addEventListener("click", function() {
            var divId = this.id.replace("cancelBtn", "div");
            var div = document.getElementById(divId);
            div.style.display = "none";
        });
    });
// Add event listener to each back button
    var backBtns = document.querySelectorAll("[id^='backBtn']");
    backBtns.forEach(function(backBtn) {
        backBtn.addEventListener("click", function() {
            var divId = this.id.replace("backBtn", "div");
            var div = document.getElementById(divId);
            div.style.display = "none";
        });
    });


// redirect by clicking go back
function redirectToNewPage() {
            // Redirect to the desired URL
            window.location.href = "http://localhost:5000/";

            // Hide the button after the redirection
            var buttonDiv = document.getElementById("button-div");
            buttonDiv.style.display = "none";
        }
