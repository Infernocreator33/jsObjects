const dog = {
    name: "Sammy", 
    species: "English Springer Spaniel",
    size: "42 inches tall",
    bark(){
        return `Ruff Ruff!`;
    }
}
console.log(`The dog ${dog.name} is a/an ${dog.species} and measures to be ${dog.size}`);
console.log(`Look a cat ${dog.name} notices and then runs after and barks ${dog.bark()}`);

