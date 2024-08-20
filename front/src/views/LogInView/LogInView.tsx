import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import { ButonsLogInForm, LogInInitialValues, LogInSchema } from "./LognInData";
import { InputsFormValues } from "../RegisterView/RegisterData";

function handlerSubmit(data: any) {
  console.log(data);
}
const LogInView = () => {
  return (
    <section>
      <FormComponent
        iniValues={LogInInitialValues}
        valiSchema={LogInSchema}
        handelerSubmit={handlerSubmit}
        butonsForm={ButonsLogInForm}
        dataContructor={InputsFormValues}
      />
    </section>
  );
};

export default LogInView;
