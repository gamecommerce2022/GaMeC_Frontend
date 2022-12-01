import axios from 'axios';
import { News } from '../../model/news_model';
import { newsUrl } from '../url';

export const editNews: (news: News) => Promise<boolean> = async (news: News) => {
  let res = await axios.put(`${newsUrl}/${news._id}`, news);
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
    url: `${newsUrl}/images`,
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
