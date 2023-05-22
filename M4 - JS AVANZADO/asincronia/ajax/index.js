const pintarElementos = (data) => {
    $("#listarPost").html("");
    data.forEach((element) => {
      $("#listarPost").append(`
      <article class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="card-title">${element.title}</div>
          <p class="lead">${element.body}</p>
        </div>
      </div>
    </article>
      `);
    });
    $("button").addClass("disabled")
  };
$(function () {
  console.log("!Listo");
  $("button").click(() => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      type: "GET",
      dataType: "JSON",
      success(data) {
        console.log(data);
        pintarElementos(data);
      },
      error(err) {
        console.error(err);
      },
    });
  });
});

