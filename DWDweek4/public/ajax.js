//select form 
$("#new-todo-form").submit(function(e){
	e.preventDefault();

	let toDoItem = $(this).serialize();

	$.post("/todos", toDoItem, function(data){
		// debugger
		$("#todo-list").append(`
			<li class="list-group-item">
			   <form action="/todos/${data._id}" method="POST" class="edit-item-form">
			        <div class="form-group">
			         	<label for="${data._id}">I HATE...</label>
			        	<input type="text" value="${data.text}" name="todo[text]" class="form-control" id="${data._id}">
			        </div>
			        <button class="btn btn-primary">Still Hate You</button>
		         </form>

					<span class="lead">
						${data.text}
					</span>
					<div class="pull-right">
						<button class="btn btn-sm btn-warning edit-button">Changed My Mind</button>
						<form style="display: inline" method="POST" action="/todos/${data._id}" class="delete-item-form">
							<button type="submit" class="btn btn-sm btn-danger">Forgive You</button>
						</form>
					</div>
					<div class="clearfix"></div>
				</li>
				`)


		$("#new-todo-form").find(".form-control").val("");

	});
});


$("#todo-list").on("click", ".edit-button", function() {
	$(this).parent().siblings(".edit-item-form").toggle();
});


$("#todo-list").on("submit", ".edit-item-form", function(e){
	e.preventDefault();
	let toDoItem = $(this).serialize();
	let actionUrl = $(this).attr("action");
	let $originalItem = $(this).parent(".list-group-item");
	$.ajax({
		url: actionUrl,
		data: toDoItem,
		type: "PUT",
		originalItem: $originalItem, //?????
		success: function(data){
			this.originalItem.html(
				`
					<form action="/todos/${data._id}" method="POST" class="edit-item-form">
			           <div class="form-group">
			              <label for="${data._id}">I HATE</label>
			        	  <input type="text" value="${data.text}" name="todo[text]" class="form-control" id="${data._id}">
			           </div>
			          <button class="btn btn-primary">Still Hate You</button>
		            </form>

					<span class="lead">
						${data.text}
					</span>
					<div class="pull-right">
						<button class="btn btn-sm btn-warning edit-button">Changed My Mind</button>
						<form style="display: inline" method="POST" action="/todos/${data._id}" class="delete-item-form">
							<button type="submit" class="btn btn-sm btn-danger">Forgive You</button>
						</form>
					</div>
					<div class="clearfix"></div>				
				`
				)
		}
	});
});


$("#todo-list").on("submit", ".delete-item-form", function(e){
	e.preventDefault();
	let confirmResponse = confirm("Are you sure you want to forgive that jerk?");
	if(confirmResponse){
		let actionUrl = $(this).attr("action");
		let $itemToDelete = $(this).closest(".list-group-item");
		// debugger;
		$.ajax({
			url: actionUrl,
			type: "DELETE",
			itemToDelete: $itemToDelete,
			success: function(data) {
				this.itemToDelete.remove();
			}
		});

	}

})




















