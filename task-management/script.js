$(document).ready(function() {
    $("#addTask").click(function() {
        let taskInput = $("#taskInput").val().trim();
        if(taskInput !== "") {
            let task = $("<li>").append($("<span>").text(taskInput)).append($("<button>").addClass("delete-btn").text("Delete"));
            $("#taskList").append(task);
            $("#taskInput").val("");
        }
    });
    
    $("#taskInput").keypress(function(event) {
        if(event.which === 13) {
            $("#addTask").click();
        }
    });

    $(document).on("click", ".delete-btn", function() {
        $(this).parent().remove();
    });

    $(document).on("click", "li span", function() {
        $(this).parent().toggleClass("completed");
    });
});