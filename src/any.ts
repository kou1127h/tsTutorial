import axios from 'axios';

export {};

const url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (res) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  // let data: any;
  data = res.data;
  // data = [
  //   {
  //     id: 1,
  //     title: 'title',
  //     description: 'desc',
  //   },
  // ];
  console.log(data);
});
