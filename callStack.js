function greet(name) {

    console.log("hello " + name);

    action(name)

    bye(name)
}

function action(name) {
    console.log("go to school " + name)
}

function bye(name) {
    console.log("good bye " + name);
}

greet("rahim")