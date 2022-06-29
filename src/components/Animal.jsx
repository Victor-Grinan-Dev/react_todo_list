import React from 'react';
import animals_db, { useAnimal } from './animals_db';

function Animal() {
    const [cat, dog] = animals_db;
    
    //Rename to your deconstructed variables:
    const {name: catName, sound:catSound} = cat;

    //give custom values in case that the variable is null or inexixtent:
    //const {name = "fluffy", sound = "purr", favFood = "fish" } = cat;
    //cause there is no value for favorite food now favFood is fish, if the were a original value, as the case of name, nothing happens.
    //deeper destructtire into object inside object.
    
    const {name, sound, feedReq: {food, water}} = cat;

    console.log(food)//2

    // you can take away the variables that are not beign used:
    // const {feedReq: {food, water}} = cat;
    // console.log(food)//2
    

    //my own hook:
    const [animal, makeSound] = useAnimal(cat);
    console.log(animal)
    makeSound()
  return (
    <div>
      <h1>"Animals"</h1>
       <h2> {catName}: {catSound}! </h2>
    </div>
  )
}

export default Animal;