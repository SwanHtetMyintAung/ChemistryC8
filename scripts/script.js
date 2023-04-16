const tbody = document.querySelector('#data-body');


function FetchData(path){
fetch(path)
.then(res => res.json())
.then(res => dataFillUses(res))
.catch(error => {
    console.error('Error fetching data:', error);
});
}
function dataFillUses(res){
    res.map(element => {
        // Create a new tr element
        let row = document.createElement('tr');
        // Set the inner HTML of the tr element using template literals
        row.innerHTML = `
            <td>${element.name}</td>
            <td>${element.formula}</td>
            <td>${element.use}</td>
        `;
        // Append the tr element to the tbody
        tbody.appendChild(row);
    });
}
FetchData('../data/Uses/sodium.json');