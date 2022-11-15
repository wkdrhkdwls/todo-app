import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, plusCategoryState } from "../atoms";

const Select = styled.select`
  width: 150px;
  height: 30px;
  color: gray;
  margin-top: 20px;
  margin-bottom: 10px;
`;

function CategoryList() {
  const userCategories = useRecoilValue(plusCategoryState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Select value={category} onInput={onInput}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>DOING</option>
      <option value={Categories.DONE}>DONE</option>
      {userCategories?.map((userCategory) => (
        <option value={userCategory.text} key={userCategory.id}>
          {userCategory.text}
        </option>
      ))}
    </Select>
  );
}

export default CategoryList;
