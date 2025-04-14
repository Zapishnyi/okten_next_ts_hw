import React from "react";
import { addMeals, getMeals } from "@/services/db/db";

const MealsForm = () => {
  return (
    <div>
      <form action={addMeals}>
        <input type="text" name={"slug"} placeholder={"slug"} />
        <input type="text" name={"title"} placeholder={"title"} />
        <input type="text" name={"image"} placeholder={"image"} />
        <input type="text" name={"summary"} placeholder={"summary"} />
        <input type="text" name={"instructions"} placeholder={"instructions"} />
        <input type="text" name={"creator"} placeholder={"creator"} />
        <input
          type="text"
          name={"creator_email"}
          placeholder={"creator_email"}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MealsForm;
