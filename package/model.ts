export interface __defaultModel {
  currentLocal: string;
  zeroFormat: null | string;
  nullFormat: null | string;
  defaultFormat: string;
  [key: string]: any;
}

export interface numableModel {
  input: number;
  value: number;
  [key: string]: any;
}

export interface numableConstructor {
  new (input: number, value: number): numableModel;
}

export interface localModel {
  decimal: string;
  delimiter: string;
}

export interface localsModel {
  [key: string]: localModel;
}

export interface formatModel {
  regexps: {
    format: RegExp;
  };
  format: (value: number, pattern: string, ...args: any[]) => string;
}

export interface formatsModel {
  [key: string]: formatModel;
}

// export interface numableModel {
//   version: string;
//   options: __defaultModel;
//   formats: formatsModel;
//   locals: localsModel;
//   local: string;
//   localData: (key: string) => localModel;
//   reset: () => void;

//   defaultOptions: (options: __defaultModel) => __defaultModel;
//   register: (this: any, type: string, name: string, __obj: any) => any;
//   _: any;
//   fn: any;
// }
