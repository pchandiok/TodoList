document.addEventListener('DOMContentLoaded', () => {
    const task = document.querySelector('#Task');
    const add = document.querySelector('#Add');
    const listItem = document.querySelector('#ListItem');

    const tasks = {
        Item: "",
        UserName: "",
        Completed: false
    };

    add.addEventListener('click', () => {
        tasks.Item = task.value;
        tasks.UserName = "Puneet Chandiok";
        tasks.Completed = false;
    });
});