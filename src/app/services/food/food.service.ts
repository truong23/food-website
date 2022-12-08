import { Food } from './../../shared/models/Food';
import { Injectable } from '@angular/core';
import { Tag } from './../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!
  }
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
   )
  }

  getAllTags(): Tag[]{
    return [
      {name: 'All', count: 12},
      {name: 'Fresh', count: 3},
      {name: 'Salad', count: 1},
      {name: 'Amazing', count: 1},
      {name: 'Dry', count: 1},
      {name: 'Noodle', count: 1},
      {name: 'Slow-Food', count: 1},
      {name: 'Fish', count: 1},
      {name: 'Fruit', count: 1},
      {name: 'fastfood', count: 1},
      {name: 'Crispy', count: 1},
    ]
  }

  getAllFoodsByTag(tag: string):Food[] {
    return tag === "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Salad',
        price: 9,
        cookTime: '5-10',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Fresh', 'Salad']
      },
      {
        id: 2,
        name: 'Sun-dried tomatoes',
        price: 20,
        cookTime: '10-20',
        favorite: false,
        origins: ['USA'],
        stars: 3,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Amazing', 'Dry']
      },
      {
        id: 3,
        name: 'Spaghetti',
        price: 30,
        cookTime: '10-15',
        favorite: true,
        origins: ['italya'],
        stars: 5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Fresh', 'Noodle']
      },
      {
        id: 4,
        name: 'Stewed fish',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Slow-Food', 'Fish']
      },
      {
        id: 5,
        name: 'fruit beams',
        price: 50,
        cookTime: '5-10',
        favorite: true,
        origins: ['HongKong', 'asia'],
        stars: 3,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Fresh', 'Fruit']
      },
      {
        id: 6,
        name: 'Fried chicken',
        price: 40,
        cookTime: '30-40',
        favorite: true,
        origins: ['india', 'asia'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Crispy', 'fastfood']
      },
    ]
  }
}
