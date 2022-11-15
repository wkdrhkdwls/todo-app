import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { plusCategoryState } from "../atoms";

interface IForm {
  plusCategory: string;
}

function CreateCategory() {
  const [plus, setPlus] = useRecoilState(plusCategoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ plusCategory }: IForm) => {
    setPlus((oldToDos) => [
      { text: plusCategory, id: Date.now() },
      ...oldToDos,
    ]);
    setValue("plusCategory", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("plusCategory", {
          required: "Write a Category",
        })}
        placeholder="카테고리를 적어주세요."
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
