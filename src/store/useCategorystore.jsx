import { create } from "zustand";

const useCategorystore = create((set) => ({
    categories: [
        {
            id: 0,
            name: "All",
            isActive: true
        },
        {
            id: 1,
            name: "Electronics",
            isActive: false
        },
        {
            id: 2,
            name: "Clothing",
            isActive: false
        },
        {
            id: 3,
            name: "Jewellery",
            isActive: false
        },
        {
            id: 4,
            name: "Men's Fashion",
            isActive: false
        },
        {
            id: 5,
            name: "Women's Fashion",
            isActive: false
        }

    ],
    ActiveCategory:(categoryId) =>set((state) => ({categories:state.categories.map((el) => el.id === categoryId? {...el,isActive:true}:{...el,isActive:false})}) ) 
}));

export default useCategorystore;