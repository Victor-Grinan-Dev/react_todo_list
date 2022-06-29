const animals_db = [
    {
        name: "cat",
        sound: "meow",
        feedReq: {
            food: 2,
            water: 3
        }  
    },
    {
        name: "dog",
        sound: "woof",
        feedReq: {
            food: 1,
            water: 3
        }   
    }
];

function useAnimal(animal) {
    return [
            animal.name,
            function(){
                console.log(animal.sound);
            }
        ];
}

export default animals_db;
export {useAnimal};