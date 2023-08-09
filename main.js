$(document).ready(function() {
    // Manipular o formulário ao ser enviado
    $("#taskForm").submit(function(event) {
      event.preventDefault(); // Evita o comportamento padrão de atualização da página
  
      var taskName = $("#taskInput").val(); // Obter o nome da tarefa digitado
  
      if (taskName !== "") {
        // Adicionar a tarefa como um elemento <li> na lista
        var taskItem = $("<li>" + taskName + "</li>");
        $("#taskList").append(taskItem);
  
        // Limpar o campo de entrada após adicionar a tarefa
        $("#taskInput").val("");
      }
    });
  
    // Adicionar efeito ao clicar nos itens da lista
    $(document).on("click", "li", function() {
      $(this).toggleClass("completed");
    });
  });
  