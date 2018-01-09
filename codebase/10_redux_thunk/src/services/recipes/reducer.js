import { Recipes } from "../actionTypes"

const mockedRecipes = [
  {
    id: 1,
    name: "King Burger",
    description: "Here are the instructions to make the perfect burger! Although it may not be the healthiest, use medium ground beef for moistness & flavour.",
    imageUrl: "http://www.seriouseats.com/recipes/images/2017/06/20170617-bulgogi-burger-matt-clifton-1.jpg",
    preparationTime: 60,
    difficulty: "Intermediate",
  },
  {
    id: 2,
    name: "Mexican Chicken Pasta",
    description: "It's a cheesy Tex-Mex dream.",
    imageUrl: "http://del.h-cdn.co/assets/16/17/980x653/gallery-1461593822-delish-mexican-chicken-pasta-1.jpg",
    preparationTime: 45,
    difficulty: "Easy",
  },
  {
    id: 3,
    name: "Pistachio Baklava",
    description: "When you think of baklava, does Turkey come to mind? Did you know that some of the world's finest baklava comes not from Greece or the Middle East?",
    imageUrl: "https://fthmb.tqn.com/4-w0gweg1vAWvBeIHEv9MzR7pyU=/2832x1914/filters:no_upscale()/PistachioBaklava-GettyImages-183422455-5997abb09abed50010b57402.jpg",
    preparationTime: 135,
    difficulty: "Difficult",
  },
  {
    id: 4,
    name: "Lattice Peach-Apple Pie",
    description: "What a great combination! Get the best of two fruits, tart apples and sweet peaches, baked in one delicious pie.",
    imageUrl: "http://kelownafarmersandcraftersmarket.com/wp-content/uploads/2017/10/apple-pie.jpg",
    preparationTime: 135,
    difficulty: "Easy",
  },
  {
    id: 5,
    name: "Chocolate Brownies",
    description: "For those of us who need to keep gluten-free, these brownies will satisfy the chocolate craving.",
    imageUrl: "http://img.taste.com.au/kdMbjArS/taste/2010/01/chocolate-brownies-118925-2.jpg",
    preparationTime: 40,
    difficulty: "Easy",
  },
  {
    id: 6,
    name: "Creole Creamy Carrot Soup",
    description: "It’s a real spirit-lifter in the fall, winter and spring, awakening and nourishing the senses.",
    imageUrl: "http://www.vegkitchen.com/wp-content/uploads/2011/11/Carrot-soup.jpg",
    preparationTime: 45,
    difficulty: "Easy",
  },
]

const mockedIngredients = {
  "1": [{ name: "Beef", amount: "200g" }, { name: "Buns", amount: "2" }],
  "2": [{ name: "Pasta", amount: "100g" }, { name: "Tomatoes", amount: "6" },
  { name: "Chicken breast", amount: "250g" }],
  "3": [{ name: "Filo pastry", amount: "100g" }, { name: "Butter", amount: "50g" },
  { name: "Honey", amount: "2 tbsp" }, { name: "Pistachios", amount: "120g" }],
  "4": [{ name: "Apples", amount: "0.5kg" }, { name: "Flour", amount: "250g" },
  { name: "Eggs", amount: "1" }],
  "5": [{ name: "Flour", amount: "200g" }, { name: "Chocolate", amount: "75g" },
  { name: "Eggs", amount: "2" }, { name: "Milk", amount: "0.5l" },
  { name: "Sugar", amount: "2 tbsp" }],
  "6": [{ name: "Carrots", amount: "200g" }, { name: "Chicken broth", amount: "500ml" },
  { name: "Cream", amount: "1 tsp" }],
}

const initialState = {
  recipesList: [],
  selectedRecipeId: undefined,
  selectedIngredients: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Recipes.FETCH_RECIPES_LIST:
      return { ...state, recipesList: mockedRecipes.slice() }
    case Recipes.SELECT_RECIPE_ID:
      return { ...state, selectedRecipeId: action.recipeId }
    case Recipes.GET_INGREDIENTS:
      return { ...state, selectedIngredients: mockedIngredients[action.recipeId].slice() }
  }

  return state
}

export default reducer