document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            return response.json();
        })
        .then(data => {
            var tr = '';
            data.forEach(element => {
                tr += `<tr>
                        <td>${element.userId}</td>
                        <td>${element.id}</td>
                        <td>${element.title}</td>
                        <td>${element.completed}</td>
                        <td>
                            <button class="w-20 h-10 bg-blue-500 text-white rounded-lg">Edit</button>
                            <button class="w-20 h-10 bg-red-500 text-white rounded-lg">Delete</button>
                            <button class="w-20 h-10 bg-green-500 text-white rounded-lg view-btn">View</button>
                        </td>
                      </tr>`;
            });
            document.querySelector("tbody").innerHTML = tr;

            const popup = document.createElement("div");
            popup.id = "popup";
            document.body.appendChild(popup);

            document.querySelectorAll('.view-btn').forEach(button => {
                button.addEventListener('click', (r) => {
                    // Get the title from the corresponding table row and set it as the content of the popup
                    document.getElementById('popup').innerHTML = `<div>
                    
                    
                    <p class="w-full">${button.closest("tr").querySelector("td:nth-child(1)").textContent}</p>
                    <p class="w-full">${button.closest("tr").querySelector("td:nth-child(2)").textContent}</p>
                    <p class="w-full">${button.closest("tr").querySelector("td:nth-child(3)").textContent}</p>
                    <p class="w-full">${button.closest("tr").querySelector("td:nth-child(4)").textContent}</p>
                    <button class="w-1/3 h-9 text-red-950 bg-slate-600 rounded-3xl p-2 float-right">cancel</button>
                    <button class="w-1-2 h-9 text-red-950 bg-green-600 rounded-3xl float-start p-2">save changes</button>
                    </div>`;
                    document.getElementById('popup').style.display = 'block';
                });
            });
        })
        .catch(error => {
            console.log(error);
        });
});
