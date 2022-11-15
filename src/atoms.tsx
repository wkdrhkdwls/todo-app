import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export const { persistAtom } = recoilPersist({
  key: "something",
  storage: localStorage,
});

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export interface ICategory {
  text: string;
  id: number;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
  effects_UNSTABLE: [persistAtom], //Selector를 저장해서 고정
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom], //TODO List들을 저장해서 고정
});

export const toDOSelector = selector({
  key: "toDOSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});

export const plusCategoryState = atom<ICategory[]>({
  key: "plusCategory",
  default: [],
  effects_UNSTABLE: [persistAtom], // Select 메뉴를 저장해서 고정
});
