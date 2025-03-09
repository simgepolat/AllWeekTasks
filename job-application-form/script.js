$(document).ready(function() {
    $("#startDate").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        firstDay: 1
    });

    $("#phone").mask("(999) 999-9999");

    $("#jobForm").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 2
            },
            lastName: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            position: {
                required: true
            },
            startDate: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: "Please enter your name",
                minlength: "Your name must have at least 2 characters"
            },
            lastName: {
                required: "Please enter your last name",
                minlength: "Your last name must be at least 2 characters"
            },
            email: {
                required: "Please enter your e-mail address",
                email: "Please enter a valid e-mail address"
            },
            phone: {
                required: "Please enter your phone number"
            },
            position: {
                required: "Please select a position"
            },
            startDate: {
                required: "Please select the start date"
            }
        },
        submitHandler: function(form) {
            const formData = $(form).serialize();
            console.log("Form data:", formData);
            
            $("#applicationForm").fadeOut(400, function() {
                $("#successMessage")
                    .fadeIn()
                    .delay(3000)
                    .fadeOut();
            });

            form.reset();
            return false;
        }
    });

    $("#showFormBtn").click(function() {
        $(this).hide();
        $("#applicationForm").fadeIn();
    });

    $("#closeFormBtn").click(function() {
        $("#applicationForm").fadeOut(400, function() {
            $("#showFormBtn").show();
        });
    });
}); 