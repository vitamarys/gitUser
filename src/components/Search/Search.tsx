import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useRedux';
import { fetchUser } from '../../store/ActionCreators';
import { ErrorMessage } from '@hookform/error-message';

import './search.scss'

const Search:React.FC =  () => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode:     'onTouched',
    })

    const dispatch = useAppDispatch();
    const onSubmit = handleSubmit(async (data) => {
        const { login } = data;
        await dispatch(fetchUser(login));
        reset()
    });

 
    return (  
        <div className='form-wrapper'>
            
                <form className='search-form' onSubmit={onSubmit}>
                <h1 className='title'>
                Find GitHub user
                </h1>
                  <input  
                  className='input'  
                  placeholder='Enter user name' 
                  type="text" 
                  {...register("login", { required: "This is required." })} 
                  
                  />
      
                    <ErrorMessage
                        errors={errors}
                        name="login"
                        render={({ message }) => <p className='error-massage '>{message}</p>}
                    />
                                
                    <p className='error-massage'></p>
                    <button className='sub-btn' type='submit'>Find User</button>
                </form>
           
            
        </div>
    );
}
 
export default Search;