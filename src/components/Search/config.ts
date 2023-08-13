
import * as yup from 'yup';


export const schema = yup.object().shape({
    login: yup
        .string()
        .email()
        .required('Required, enter user login'),
  
});
