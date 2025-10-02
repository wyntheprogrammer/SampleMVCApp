// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function setDeleteId(id) {
    document.getElementById('deleteId').value = id;
    document.getElementById('deleteForm').action = '/Home/Delete';
}