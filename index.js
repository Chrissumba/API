// Function to list posts
// function listPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             // Process the data and display it on the page
//             console.log(data);
//         })
//         .catch(error => {
//             // Handle any errors that occurred
//             console.error('Error:', error);
//         });
// }

// // Function to create a new post
// function createPost() {
//     var title = document.getElementById('titleInput').value;
//     var body = document.getElementById('bodyInput').value;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: title,
//                 body: body,
//                 userId: 1 // Replace with the desired user ID
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Process the response and display it on the page
//             console.log(data);
//         })
//         .catch(error => {
//             // Handle any errors that occurred
//             console.error('Error:', error);
//         });

//     document.getElementById('titleInput').value = ''
//     document.getElementById('bodyInput').value = ''
// }

// // Function to update a post
// function updatePost() {
//     var postId = document.getElementById('postIdInput').value;
//     var updatedTitle = document.getElementById('updatedTitleInput').value;
//     var updatedBody = document.getElementById('updatedBodyInput').value;

//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//             method: 'PUT', // or 'PATCH' for partial updates
//             body: JSON.stringify({
//                 title: updatedTitle,
//                 body: updatedBody
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Process the response and display it on the page
//             console.log(data);
//         })
//         .catch(error => {
//             // Handle any errors that occurred
//             console.error('Error:', error);
//         });
//     document.getElementById('postIdInput').value = ''
//     document.getElementById('updatedTitleInput').value = ''
//     document.getElementById('updatedBodyInput').value = ''

// }

// // Function to delete a post
// function deletePost() {
//     var postId = document.getElementById('deletePostIdInput').value;

//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//             method: 'DELETE',
//         })
//         .then(response => {
//             if (response.ok) {
//                 console.log('Post deleted successfully.');
//             } else {
//                 console.log('Post deletion failed.');
//             }
//         })
//         .catch(error => {
//             // Handle any errors that occurred
//             console.error('Error:', error);
//         });
//     document.getElementById('deletePostIdInput').value = ''
// }

// // Function to filter posts
function filterPosts() {
    var userId = document.getElementById('userIdInput').value;

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            // Process the data and display it on the page
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred
            console.error('Error:', error);
        });
    document.getElementById('userIdInput').value = ''
}