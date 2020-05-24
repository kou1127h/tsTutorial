export {};

type Profile = {
  name: string;
  foo: number;
};

const example: Profile = {
  name: 'hayashi',
  foo: 123,
};

type Profile2 = typeof example;
