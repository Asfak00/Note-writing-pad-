onload = () => {
  main();
};

// All main notepad app logic here
let clickSound = new Audio("click.mp3");
const main = () => {
  // All reference here
  const mainContainerToNote = document.querySelector(".notepadContainer");
  const inputBox = document.getElementById("input");
  const addNoteBtn = document.getElementById("addNoteButton");

  // adding listener to add note button
  addNoteBtn.addEventListener("click", () => {
    clickSound.play();
    if (inputBox.value === "") {
      alert("Please write something");
    } else {
      createNote(mainContainerToNote, inputBox);
    }
    inputBox.value = "";

    // AddDataToLocalstorage();
  });

  // adding listener to input box
};

// creating a function for anyone click on add note button that create dynamically message box
const createNote = (mainContainerToNote, text = "") => {
  let container = document.createElement("div");

  // creating a separate id for the all elements
  // let uniqueId = Date.now().toString();
  // container.id = uniqueId;
  container.classList.add("noteDiv");
  container.innerHTML = `
                <div class="main ${text ? "" : "toggle"}">${input.value}</div>
                <textarea class="textArea toggle ${text ? "toggle" : ""}">${
    input.value
  }</textarea>
                <button id="edit"><i class="fa-solid fa-pen "></i><i class="fa-solid fa-floppy-disk none"></i></button>
                <button id="delete"><i class="fa-solid fa-trash"></i></button>
  `;

  mainContainerToNote.appendChild(container);

  let main = container.querySelector(".main");
  let textArea = container.querySelector(".textArea");
  let editBtn = container.querySelector("#edit");
  let deleteBtn = container.querySelector("#delete");
  let saveIcon = container.querySelector(".fa-floppy-disk");

  // adding event listener to the button
  editBtn.addEventListener(
    "click",
    editBtnHandler(main, textArea, clickSound, saveIcon)
  );

  deleteBtn.addEventListener("click", deleteBtnHandler(clickSound));

  textArea.addEventListener("change", (e) => {
    let value = e.target.value;
    main.innerHTML = value;
  });
};

// creating a function for edit button handler
const editBtnHandler = (main, textArea, clickSound, saveIcon) => {
  return () => {
    clickSound.play();
    saveIcon.classList.toggle("none");
    textArea.classList.toggle("toggle");
    main.classList.toggle("toggle");
  };
};

// creating a function for delete button handler
const deleteBtnHandler = (clickSound) => {
  return (e) => {
    clickSound.play();
    let deletedItem = e.target.parentElement.parentElement;
    deletedItem.remove();
  };
};

// // Adding user data localStorage form notepad
// const AddDataToLocalstorage = () => {
//   let textareaData = document.querySelectorAll(".textArea");
//   let notes = [];
//   textareaData.forEach((element) => {
//     notes.push(element.value);
//   });
//   localStorage.setItem("Notes", JSON.stringify(notes));
// };

// // Getting the user data or value form localStorage
// const mainContainerToNote = document.querySelector(".notepadContainer");
// let userDataFormLocalstorage = JSON.parse(localStorage.getItem("Notes"));
// if (userDataFormLocalstorage) {
//   userDataFormLocalstorage.forEach((element) => {
//     createNote(mainContainerToNote, element.value);
//   });
// }
