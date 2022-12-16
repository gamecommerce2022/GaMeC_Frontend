import axios from 'axios';
import { Product } from '../../model/product_model';
import { productUrl } from '../url';

export const editGame: (game: Product) => Promise<boolean> = async (game: Product) => {
  let res = await axios.put(`${productUrl}/${game._id}`, game);
  console.log(res)
  let code = res.data.code;
  if (code === 200) {
    return true;
  } else {
    return false;
  }
};

export const editImage: (props: { image: File }) => Promise<any> = async (props: {
  image: File;
}) => {
  var bodyFormData = new FormData();
  bodyFormData.append('image', props.image);
  let res = await axios({
    method: 'post',
    url: `${productUrl}/images`,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  let imagePath = res.data.imagePath;
  if (imagePath) {
    return imagePath;
  } else {
    return null;
  }
};
