import axios from 'axios';
import { Game } from '../../model/product_model';
import { productUrl } from '../url';

export const editGame: (game: Game) => Promise<boolean> = async (game: Game) => {
  let res = await axios.put(`${productUrl}/${game._id}`, game);
  console.log(res)
  let code = res.data.code;
  if (code === 200) {
    return true;
  } else {
    return false;
  }
};

export const editImage: (props: { image: File; id: string }) => Promise<boolean> = async (props: {
  image: File;
  id: string;
}) => {
  var bodyFormData = new FormData();
  bodyFormData.append('id', props.id);
  bodyFormData.append('image', props.image);
  let res = await axios({
    method: 'post',
    url: `${productUrl}/images`,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  console.log(res);
  let code = res.data.code;
  if (code === 200) {
    return true;
  } else {
    return false;
  }
};
