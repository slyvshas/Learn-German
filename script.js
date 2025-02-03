function showContent(category) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected category's content
    const selectedContent = document.getElementById(`${category}-content`);
    selectedContent.style.display = 'block';

    // Hide the category options container
    document.querySelector('.category-container').style.display = 'none';

    // Show the content container
    document.querySelector('.content-container').style.display = 'block';
}

function goBack() {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the category options again
    document.querySelector('.category-container').style.display = 'flex';

    // Hide the content container
    document.querySelector('.content-container').style.display = 'none';
}
