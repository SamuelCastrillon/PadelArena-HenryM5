export interface IFormikConstructor {
  iniValues: Object;
  valiSchema: Object;
  handelerSubmit: any;
  titleForm: ITitleForm;
  butonsForm: IButtonForm[];
  dataContructor: IDataConstructorInput[];
}

export interface ITitleForm {
  title: string;
  icone: string;
}

export interface IDataConstructorInput {
  LabelText: string;
  FieldType: string;
  FieldName: string;
  FieldPH: string;
}

export interface IButtonForm {
  name: string;
  type: "submit" | "reset" | "button" | undefined;
}
