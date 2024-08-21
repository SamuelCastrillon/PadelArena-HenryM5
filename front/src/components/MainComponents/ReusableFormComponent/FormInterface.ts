export interface IFormikConstructor {
  iniValues: Object;
  valiSchema: Object;
  handelerSubmit: any;
  butonsForm: IButtonForm[];
  dataContructor: IDataConstructor[];
}

export interface IDataConstructor {
  LabelText: string;
  FieldType: "textarea" | "checkboxContainer" | string;
  FieldName: string;
  FieldPH?: string;
  containerCheckBox?: IDataConstructor[];
}

export interface IButtonForm {
  name: string;
  type: "submit" | "reset" | "button" | undefined;
}
