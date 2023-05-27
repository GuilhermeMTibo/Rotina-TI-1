function addActivity() {
    var activityInput = document.getElementById("activity-input");
    var timeInput = document.getElementById("time-input");
    var dayInput = document.getElementById("day-input");
    var routineBody = document.getElementById("routine-body");
    
    var newRow = document.createElement("tr");
    var activityCell = document.createElement("td");
    activityCell.textContent = activityInput.value;
    newRow.appendChild(activityCell);
    
    var timeCell = document.createElement("td");
    timeCell.textContent = timeInput.value;
    newRow.appendChild(timeCell);
    
    var dayCell = document.createElement("td");
    dayCell.textContent = dayInput.value;
    newRow.appendChild(dayCell);
    
    var actionsCell = document.createElement("td");
    var editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click", function() {
      editActivity(this);
    });
    actionsCell.appendChild(editButton);
    
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", function() {
      removeActivity(this);
    });
    actionsCell.appendChild(removeButton);
    
    newRow.appendChild(actionsCell);
    routineBody.appendChild(newRow);
    
    activityInput.value = "";
    timeInput.value = "";
    dayInput.value = "";
  }
  
  function editActivity(button) {
    var row = button.parentNode.parentNode;
    var activityCell = row.cells[0];
    var timeCell = row.cells[1];
    var dayCell = row.cells[2];
    
    var activityInput = document.createElement("input");
    activityInput.type = "text";
    activityInput.className = "routine-input";
    activityInput.value = activityCell.textContent;
    activityCell 
  }

function salvar() {
  console.log("Salvar funcionando")
}